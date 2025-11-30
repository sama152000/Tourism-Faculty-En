import { Injectable } from '@angular/core';
import { FooterData } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  getFooterData(): FooterData {
    return {
      aboutText: 'The Faculty of Tourism and Hotels at Luxor University is dedicated to advancing education, research, and professional development in the tourism and hospitality sectors.',
      copyrightText: '© 2025 Faculty of Tourism and Hotels - Luxor University. All rights reserved.',
      contactInfo: {
        address: 'Luxor University Campus, Luxor, Egypt',
        phone: '+20 95 123 456 789',
        email: 'info@faculty-tourism.luxor.edu.eg',
        website: 'https://faculty-tourism.luxor.edu.eg'
      },
      socialLinks: [
        {
          id: '1',
          platform: 'Facebook',
          url: 'https://facebook.com/luxor-tourism-faculty',
          icon: 'pi pi-facebook'
        },
        {
          id: '2',
          platform: 'Twitter',
          url: 'https://twitter.com/luxor_tourism',
          icon: 'pi pi-twitter'
        },
        {
          id: '3',
          platform: 'Instagram',
          url: 'https://instagram.com/luxor_tourism_faculty',
          icon: 'pi pi-instagram'
        },
        {
          id: '4',
          platform: 'LinkedIn',
          url: 'https://linkedin.com/school/luxor-tourism-faculty',
          icon: 'pi pi-linkedin'
        },
        {
          id: '5',
          platform: 'YouTube',
          url: 'https://youtube.com/@luxortourismfaculty',
          icon: 'pi pi-youtube'
        }
      ],
      footerSections: [
        {
          title: 'Quick Links',
          links: [
            { id: '1', label: 'Home', routerLink: '/' },
            { id: '2', label: 'About Us', routerLink: '/about' },
            { id: '3', label: 'Departments', routerLink: '/departments' },
            { id: '4', label: 'News & Events', routerLink: '/news' },
            { id: '5', label: 'Contact Us', routerLink: '/contact' }
          ]
        },
        {
          title: 'Academic Resources',
          links: [
            { id: '1', label: 'Student Portal', routerLink: '/student-portal' },
            { id: '2', label: 'E-Learning', routerLink: '/elearning' },
            { id: '3', label: 'Digital Library', routerLink: '/library' },
            { id: '4', label: 'Research Center', routerLink: '/research' },
            { id: '5', label: 'Academic Calendar', routerLink: '/calendar' }
          ]
        },
        {
          title: 'Student Services',
          links: [
            { id: '1', label: 'Admissions', routerLink: '/admissions' },
            { id: '2', label: 'Student Affairs', routerLink: '/student-affairs' },
            { id: '3', label: 'Career Services', routerLink: '/careers' },
            { id: '4', label: 'International Programs', routerLink: '/international' },
            { id: '5', label: 'Alumni Network', routerLink: '/alumni' }
          ]
        }
      ]
    };
  }
}