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
          image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=400',
          link: '/departments/tourism'
        },
        {
          id: '2',
          name: 'Hotel Management',
          description: 'Specializes in hotel operations, food & beverage management, service quality, and revenue optimization.',
          image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=400',
          link: '/departments/hotel'
        },
        {
          id: '3',
          name: 'Guidance & Interpretation',
          description: 'Training professional tour guides and interpretive services for heritage sites and cultural tourism.',
          image: 'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&w=400',
          link: '/departments/guidance'
        },
        {
          id: '4',
          name: 'Sustainable Tourism',
          description: 'Focus on eco-friendly tourism practices, environmental conservation, and community-based tourism.',
          image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
          link: '/departments/sustainable'
        }
      ]
    };
  }
}