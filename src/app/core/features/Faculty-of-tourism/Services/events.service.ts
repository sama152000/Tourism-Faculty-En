import { Injectable } from '@angular/core';
import { EventsData } from '../model/events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  getEventsData(): EventsData {
    return {
      title: 'Upcoming Faculty Events',
      viewAllLink: '/news-list?category=events',
      events: [
        {
          id: '1',
          title: 'Tourism & Hospitality Conference 2025',
          description: 'Join industry experts and faculty members to discuss future trends in tourism education and professional practice.',
          date: new Date('2025-03-15'),
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500',
          link: '/events/tourism-conference-2025'
        },
        {
          id: '2',
          title: 'Cultural Heritage Preservation Workshop',
          description: 'Students present innovative projects on preserving Egypt\'s cultural identity and promoting sustainable heritage tourism.',
          date: new Date('2025-02-28'),
          image: 'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&w=500',
          link: '/events/heritage-workshop'
        },
        {
          id: '3',
          title: 'Career Fair: Meet Industry Leaders',
          description: 'Connect with top hotel chains and tourism agencies offering internships and job opportunities for our graduates.',
          date: new Date('2025-04-20'),
          image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=500',
          link: '/events/career-fair'
        },
        {
          id: '4',
          title: 'Sustainable Tourism Guest Lecture Series',
          description: 'International guest speakers share insights on eco-friendly tourism and sustainable management practices.',
          date: new Date('2025-05-10'),
          image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=500',
          link: '/events/sustainable-tourism-lecture'
        }
      ]
    };
  }
}