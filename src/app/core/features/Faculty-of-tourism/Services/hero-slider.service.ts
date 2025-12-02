import { Injectable } from '@angular/core';
import { HeroSliderData } from '../model/hero-slider.model';

@Injectable({
  providedIn: 'root'
})
export class HeroSliderService {

  getHeroSliderData(): HeroSliderData {
    return {
      autoPlay: true,
      interval: 3000,
      slides: [
        {
          id: '1',
          image: './assets/slide3.jpg',
          title: 'Welcome to the Faculty of Tourism & Hotels',
          description: 'Explore excellence in hospitality, culture, and tourism education at Luxor University.',
          buttonText: 'Learn More',
          buttonLink: '/about'
        },
        {
          id: '2',
          image: './assets/slide1.jpg',
          title: 'Learn from Industry Experts',
          description: 'Our programs prepare you for global tourism and hotel management careers.',
          buttonText: 'Explore Programs',
          buttonLink: '/departments'
        },
        {
          id: '3',
          image: './assets/slide2.jpg',
          title: 'Discover Egypt\'s Cultural Heritage',
          description: 'Study in one of the world\'s most historically rich tourism destinations.',
          buttonText: 'Discover More',
          buttonLink: '/about/heritage'
        }
      ]
    };
  }
}