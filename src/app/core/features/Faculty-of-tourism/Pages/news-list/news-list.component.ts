import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NewsService } from '../../Services/news.service';
import { CategoriesService } from '../../Services/categories.service';
import { NewsTabsData, NewsPost, NewsCategory } from '../../model/news.model';
import { Category } from '../../model/category.model';
import { CleanHtmlPipe } from '../../../../pipes/clean-html.pipe'; // ✅ Import Pipe

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, CleanHtmlPipe],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsData!: NewsTabsData;
  selectedCategory: string = 'All';
  categories: Category[] = [];
  servicesCategoryId: string | null = null;
  isFilteredByServices: boolean = false;
  
  // Search and filter properties
  searchQuery: string = '';
  selectedDropdownCategory: string = 'All';
  allPosts: NewsPost[] = [];
  
  // Custom dropdown properties
  isDropdownOpen: boolean = false;
  
  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(
    private newsService: NewsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  ngOnInit(): void {
    // First, fetch categories to find the services category
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
      
      // Find the services category (supports both Arabic and English)
      const servicesCategory = categories.find(cat => 
        cat.name.toLowerCase().includes('service') || 
        cat.name.includes('Services')
      );
      
      if (servicesCategory) {
        this.servicesCategoryId = servicesCategory.id;
      }
      
      // Now fetch news data
      this.loadNewsData();
    });
  }

  // Get all category names from backend
  getAllCategoryNames(): string[] {
    return this.categories.map(cat => cat.name);
  }

  loadNewsData(): void {
    this.newsService.getNewsTabsData().subscribe(data => {
      // Store all posts for filtering
      this.allPosts = data.sections.flatMap(s => s.posts);
      
      // Initialize pagination
      this.totalItems = this.allPosts.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      
      // Add 'All' section at the beginning with all posts
      this.newsData = {
        title: data.title,
        subtitle: data.subtitle,
        sections: [{ categoryName: 'All', posts: this.allPosts }, ...data.sections]
      };

      this.route.queryParams.subscribe(params => {
        if (params['category']) {
          this.selectedCategory = params['category'];
          this.selectedDropdownCategory = params['category'];
        }
      });
    });
  }

  // Handle category dropdown change
  onCategoryChange(categoryName: string): void {
    this.selectedDropdownCategory = categoryName;
    this.selectedCategory = categoryName;
    this.searchQuery = '';
    
    if (categoryName === 'All') {
      this.isFilteredByServices = false;
      this.newsData = {
        ...this.newsData,
        sections: [{ categoryName: 'All', posts: this.allPosts }]
      };
    } else {
      this.isFilteredByServices = false;
      const categoryPosts = this.allPosts.filter(post =>
        post.postCategories.some(cat => cat.categoryName === categoryName)
      );
      this.newsData = {
        ...this.newsData,
        sections: [{ categoryName: categoryName, posts: categoryPosts }]
      };
    }
    
    this.updatePagination();
    
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: categoryName === 'All' ? null : categoryName },
      queryParamsHandling: 'merge'
    });
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.onCategoryChange(this.selectedDropdownCategory);
      return;
    }
    this.performSearch();
  }

  // Real-time search as you type
  onSearchInput(): void {
    if (!this.searchQuery.trim()) {
      this.onCategoryChange(this.selectedDropdownCategory);
      return;
    }
    this.performSearch();
  }

  private performSearch(): void {
    const query = this.searchQuery.toLowerCase();
    let filteredPosts: NewsPost[];
    const searchCategory = this.selectedDropdownCategory === 'All' ? 'Search Results' : this.selectedDropdownCategory;
    
    if (this.selectedDropdownCategory === 'All') {
      filteredPosts = this.allPosts.filter(post =>
        (post.title && post.title.toLowerCase().includes(query)) ||
        (post.content && post.content.toLowerCase().includes(query))
      );
    } else if (this.selectedDropdownCategory === 'Services' && this.servicesCategoryId) {
      filteredPosts = this.allPosts.filter(post =>
        post.postCategories.some(cat => cat.categoryId === this.servicesCategoryId) &&
        ((post.title && post.title.toLowerCase().includes(query)) || (post.content && post.content.toLowerCase().includes(query)))
      );
    } else {
      filteredPosts = this.allPosts.filter(post =>
        post.postCategories.some(cat => cat.categoryName === this.selectedDropdownCategory) &&
        ((post.title && post.title.toLowerCase().includes(query)) || (post.content && post.content.toLowerCase().includes(query)))
      );
    }
    
    // Update selectedCategory to match the search results section
    this.selectedCategory = searchCategory;
    
    this.newsData = {
      ...this.newsData,
      sections: [{ 
        categoryName: searchCategory, 
        posts: filteredPosts 
      }]
    };
    
    this.totalItems = filteredPosts.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
  }

  // Show all news
  showAllNews(): void {
    this.selectedDropdownCategory = 'All';
    this.selectedCategory = 'All';
    this.searchQuery = '';
    this.isFilteredByServices = false;
    this.isDropdownOpen = false;
    
    this.newsData = {
      ...this.newsData,
      sections: [{ categoryName: 'All', posts: this.allPosts }]
    };
    
    this.updatePagination();
    
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: null },
      queryParamsHandling: 'merge'
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCategory(categoryName: string): void {
    this.selectedDropdownCategory = categoryName;
    this.isDropdownOpen = false;
    this.onCategoryChange(categoryName);
  }

  onTabChange(categoryName: string): void {
    this.onCategoryChange(categoryName);
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getPostCategories(post: NewsPost): string {
    if (post.postCategories && post.postCategories.length > 0) {
      return post.postCategories.map(cat => cat.categoryName).join(', ');
    }
    return '';
  }

  get selectedPosts(): NewsPost[] {
    const section = this.newsData.sections.find(s => s.categoryName === this.selectedCategory);
    return section ? section.posts : [];
  }

  goToPost(post: NewsPost): void {
    this.router.navigate(['/news', post.slug]); 
  }
  
  get paginatedPosts(): NewsPost[] {
    const posts = this.selectedPosts;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return posts.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  get pages(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.scrollToTop();
    }
  }
  
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.scrollToTop();
    }
  }
  
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.scrollToTop();
    }
  }
  
  private scrollToTop(): void {
    const filterSection = document.querySelector('.news-filter-section');
    if (filterSection) {
      filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // Update pagination when category changes
  private updatePagination(): void {
    this.totalItems = this.selectedPosts.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
  }
}