import { Injectable } from '@angular/core';
import { DepartmentsData } from '../model/departments.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  getDepartmentsData(): DepartmentsData {
    return {
      title: 'Our Academic Departments',
      subtitle: 'Explore the major academic departments within the Faculty of Tourism & Hotels',
      departments: [
        {
          id: '1',
          name: 'Tourism Studies',
          description: 'Focuses on tourism planning, heritage management, tour guiding, and destination development strategies.',
          image: './assets/tour4.jpg',
          link: '/departments/tourism'
        },
        {
          id: '2',
          name: 'Hotel Management',
          description: 'Specializes in hotel operations, food & beverage management, service quality, and revenue optimization.',
          image: './assets/tour12.jpeg',
          link: '/departments/hotel'
        },
        {
          id: '3',
          name: 'Guidance & Interpretation',
          description: 'Training professional tour guides and interpretive services for heritage sites and cultural tourism.',
          image: './assets/event3.jpg',
          link: '/departments/guidance'
        },
        {
          id: '4',
          name: 'Sustainable Tourism',
          description: 'Focus on eco-friendly tourism practices, environmental conservation, and community-based tourism.',
          image: './assets/event3.jpg',
          link: '/departments/sustainable'
        }
      ]
    };
  }
}