import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../Services/news.service';
import { NewsPost } from '../../../model/news.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterLink],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventsPosts: NewsPost[] = [];
  @Input() limit: number = 2; // default limit for home page

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(posts => {
      // فلترة الأحداث فقط (case-insensitive)
      const eventsOnly = posts.filter(p =>
        p.postCategories.some(c => c.categoryName.toLowerCase().includes('event'))
      );

      // ترتيب حسب التاريخ (الأحدث أولاً)
      const sorted = [...eventsOnly].sort(
        (a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      );

      this.eventsPosts = sorted.slice(0, this.limit);
    });
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  getTimeUntilEvent(dateStr: string): string {
    const eventDate = new Date(dateStr);
    const now = new Date();
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Event Ended';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 7) return `In ${diffDays} days`;
    if (diffDays <= 30) return `In ${Math.ceil(diffDays / 7)} weeks`;
    return `In ${Math.ceil(diffDays / 30)} months`;
  }

  getEventDate(event: NewsPost): string {
    return event.publishedDate || event.createdDate;
  }
}
