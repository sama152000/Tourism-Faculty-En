/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventsComponent } from './events.component';
import { ContentService } from '../../../Services/content.service';
import { ContentItem } from '../../../model/content.model';

const mockContentService = {
  getContentByCategory: (category: string) => {
    const items: ContentItem[] = [
      {
        id: '1',
        title: 'Mock Event 1',
        excerpt: 'Excerpt 1',
        content: 'Full content',
        image: './assets/tour1.jpg',
        date: new Date(),
        category: 'events',
        link: '/events/1'
      }
    ];
    return items.filter(i => i.category === category);
  }
};

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ EventsComponent ],
      providers: [
        { provide: ContentService, useValue: mockContentService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
