import { Injectable } from '@angular/core';
import { HeroSliderData } from '../model/hero-slider.model';

@Injectable({
  providedIn: 'root'
})
export class HeroSliderService {

  getHeroSliderData(): HeroSliderData {
    return {
      autoPlay: true,
      interval: 5000,
      slides: [
        {
          id: '1',
          image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Welcome to the Faculty of Tourism & Hotels',
          description: 'Explore excellence in hospitality, culture, and tourism education at Luxor University.',
          buttonText: 'Learn More',
          buttonLink: '/about'
        },
        {
          id: '2',
          image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Learn from Industry Experts',
          description: 'Our programs prepare you for global tourism and hotel management careers.',
          buttonText: 'Explore Programs',
          buttonLink: '/departments'
        },
        {
          id: '3',
          image: 'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Discover Egypt\'s Cultural Heritage',
          description: 'Study in one of the world\'s most historically rich tourism destinations.',
          buttonText: 'Discover More',
          buttonLink: '/about/heritage'
        }
      ]
    };
  }
}