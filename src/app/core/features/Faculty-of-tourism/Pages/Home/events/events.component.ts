import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../../Services/events.service';
import { EventsData } from '../../../model/events.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventsData!: EventsData;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsData = this.eventsService.getEventsData();
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getTimeUntilEvent(eventDate: Date): string {
    const now = new Date();
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return 'Event passed';
    } else if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Tomorrow';
    } else if (diffDays <= 7) {
      return `In ${diffDays} days`;
    } else if (diffDays <= 30) {
      return `In ${Math.ceil(diffDays / 7)} weeks`;
    } else {
      return `In ${Math.ceil(diffDays / 30)} months`;
    }
  }
}