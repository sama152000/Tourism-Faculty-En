import { Injectable } from '@angular/core';
import { QuickSidebarData } from '../model/quick-sidebar.model';

@Injectable({
  providedIn: 'root'
})
export class QuickSidebarService {

  getQuickSidebarData(): QuickSidebarData {
    return {
      title: 'Quick Access',
      position: 'right',
      links: [
        {
          id: '1',
          title: 'About the Faculty',
          icon: 'pi pi-info-circle',
          routerLink: '/about'
        },
        {
          id: '4',
          title: 'News & Events',
          icon: 'pi pi-file-edit',
          routerLink: '/news-list'
        },
        {
          id: '2',
          title: 'Sectors',
          icon: 'pi pi-desktop',
          routerLink: '/sectors'
        },
        {
          id: '3',
          title: 'Units',
          icon: 'pi pi-book',
          routerLink: '/units'
        },
        {
          id: '6',
          title: 'Departments',
          icon: 'pi pi-user',
          routerLink: '/departments'
        },
        {
          id: '5',
          title: 'Contact Us',
          icon: 'pi pi-phone',
          routerLink: '/contact'
        }
      ]
    };
  }
}