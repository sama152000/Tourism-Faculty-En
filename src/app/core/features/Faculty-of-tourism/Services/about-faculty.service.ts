import { Injectable } from '@angular/core';
import { AboutFacultyData } from '../model/about-faculty.model';

@Injectable({
  providedIn: 'root'
})
export class AboutFacultyService {

  getAboutFacultyData(): AboutFacultyData {
    return {
      aboutInfo: {
        title: 'About Our Faculty',
        description: 'The Faculty of Tourism and Hotel Management at Luxor University is a leading institution dedicated to excellence in hospitality, tourism, and cultural studies. We provide students with strong academic foundations and hands-on training to become future leaders in the global tourism industry.',
        highlights: [
          'Programs combine theoretical learning with practical experience',
          'Guided by experts from academia and professional fields',
          'Focus on Egyptian cultural heritage and sustainable tourism',
          'Strong partnerships with leading hospitality organizations'
        ],
        buttonText: 'Learn More About Us',
        buttonLink: '/about',
        mainImage: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600',
        overlayImage: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    };
  }
}