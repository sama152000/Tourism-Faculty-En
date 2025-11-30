import { Injectable } from '@angular/core';
import { NewsData } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  getNewsData(): NewsData {
    return {
      title: 'Latest Faculty News',
      viewAllLink: '/news',
      news: [
        {
          id: '1',
          title: 'Faculty Seminar on Sustainable Tourism Development',
          excerpt: 'Our faculty organized a comprehensive seminar focusing on eco-friendly and sustainable tourism development practices for the future.',
          image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=400',
          date: new Date('2025-01-15'),
          link: '/news/sustainable-tourism-seminar'
        },
        {
          id: '2',
          title: 'Student Workshop in Hotel Operations Management',
          excerpt: 'Students participated in an intensive workshop gaining practical insights into hospitality and hotel management best practices.',
          image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=400',
          date: new Date('2025-01-10'),
          link: '/news/hotel-operations-workshop'
        },
        {
          id: '3',
          title: 'Annual Cultural Heritage Week Celebration',
          excerpt: 'The annual event showcased diverse performances and exhibits celebrating Egypt\'s rich cultural heritage and tourism significance.',
          image: 'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&w=400',
          date: new Date('2025-01-05'),
          link: '/news/cultural-heritage-week'
        }
      ]
    };
  }
}