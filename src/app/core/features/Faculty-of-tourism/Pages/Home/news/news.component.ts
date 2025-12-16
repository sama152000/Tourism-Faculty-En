import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../Services/news.service';
import { NewsPost } from '../../../model/news.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterLink],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsPosts: NewsPost[] = [];
  newsData: { news: NewsPost[] } = { news: [] };
  @Input() limit: number = 3; // default limit for home page

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
  this.newsService.getNews().subscribe(posts => {
    // فلترة الأخبار فقط (case-insensitive)
    const newsOnly = posts.filter(p =>
      p.postCategories.some(c => c.categoryName.toLowerCase() === 'news')
    );

    // ترتيب حسب التاريخ الأحدث
    const sorted = [...newsOnly].sort(
      (a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );

    this.newsPosts = sorted.slice(0, this.limit);
    this.newsData.news = this.newsPosts;
  });
}


  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
}
