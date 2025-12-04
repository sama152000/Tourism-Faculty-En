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
            { id: '4', label: 'News & Events', routerLink: '/news-list' },
            { id: '5', label: 'Contact Us', routerLink: '/contact' }
          ]
        },
        
        {
          title: 'Student Services',
          links: [
            { id: '1', label: 'Academic Support', routerLink: '/services/1' },
            { id: '2', label: 'Library & Information Resources', routerLink: '/services/2' },
            { id: '3', label: 'Career Services', routerLink: '/services/3' },
            { id: '4', label: 'International Programs', routerLink: '/services/4' },
          ]
        }
      ]
    };
  }
}