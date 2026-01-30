import { Injectable } from '@angular/core';
import { FooterData } from '../model/footer.model';
import { ContactService } from './contact.service';
import { ServicesService } from './services.service';
import { Observable, map, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private contactService: ContactService, private servicesService: ServicesService) {}
  
  getFooterData(): Observable<FooterData> {
    const contacts$ = this.contactService.getContacts();
    const services$ = this.servicesService.getServices();

    return forkJoin([contacts$, services$]).pipe(
      map(([contacts, services]) => {
        const contact = contacts.length > 0 ? contacts[0] : null;
        return {
          aboutText: 'The Faculty of Tourism and Hotels at Luxor University is dedicated to advancing education, scientific research, and professional development in the fields of tourism and hospitality.',
          copyrightText: '© 2025 Faculty of Tourism and Hotels - Luxor University. All rights reserved.',
          contactInfo: {
            address: contact?.address || '',
            phone: contact?.phone || '',
            email: contact?.email || '',
            website: contact?.webSite || ''
          },
          socialLinks: [
            {
              id: '1',
              platform: 'Facebook',
              url: contact?.facebook || '#',
              icon: 'pi pi-facebook'
            },
            {
              id: '2',
              platform: 'Email',
              url: contact?.email ? `mailto:${contact.email}` : '#',
              icon: 'pi pi-envelope'
            },
          ],
          footerSections: [
            {
              title: 'Quick Links',
              links: [
                { id: '1', label: 'Home', routerLink: '/' },
                { id: '2', label: 'About the Faculty', routerLink: '/about' },
                { id: '4', label: 'News & Events', routerLink: '/news-list' },
                { id: '5', label: 'Contact Us', routerLink: '/contact' }
              ]
            },
            {
              title: 'Student Services',
              links: services.map((service, index) => ({
                id: (index + 1).toString(),
                label: service.title,
                routerLink: `/services/${service.slug}`
              }))
            }
          ]
        };
      })
    );
  }
}
