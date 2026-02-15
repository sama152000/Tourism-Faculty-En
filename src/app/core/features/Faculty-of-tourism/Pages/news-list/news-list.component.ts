import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NewsService } from '../../Services/news.service';
import { NewsTabsData, NewsPost } from '../../model/news.model';
import { CleanHtmlPipe } from '../../../../pipes/clean-html.pipe'; // ✅ استدعاء الـ Pipe


@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CleanHtmlPipe],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsData!: NewsTabsData;
  selectedCategory: string = 'All'; // ✅ default category in English

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newsService.getNewsTabsData().subscribe(data => {
      this.newsData = {
        ...data,
        sections: [
          { categoryName: 'All', posts: data.sections.flatMap(s => s.posts) }, // ✅ English label
          ...data.sections
        ]
      };

      this.route.queryParams.subscribe(params => {
        if (params['category']) {
          this.selectedCategory = params['category'];
        }
      });
    });
  }

  onTabChange(categoryName: string): void {
    this.selectedCategory = categoryName;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: categoryName },
      queryParamsHandling: 'merge'
    });
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { // ✅ English locale
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  get selectedPosts(): NewsPost[] {
    const section = this.newsData.sections.find(s => s.categoryName === this.selectedCategory);
    return section ? section.posts : [];
  }

  // ✅ navigate to post details using slug
  goToPost(post: NewsPost): void {
    this.router.navigate(['/news', post.slug]); 
  }
}
