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
          title: 'Student Portal',
          icon: 'pi pi-user',
          url: '/student-portal'
        },
        {
          id: '2',
          title: 'E-Learning',
          icon: 'pi pi-desktop',
          url: '/elearning'
        },
        {
          id: '3',
          title: 'Library',
          icon: 'pi pi-book',
          url: '/library'
        },
        {
          id: '4',
          title: 'Admissions',
          icon: 'pi pi-file-edit',
          url: '/admissions'
        },
        {
          id: '5',
          title: 'Contact Us',
          icon: 'pi pi-phone',
          url: '/contact'
        },
        {
          id: '6',
          title: 'University Website',
          icon: 'pi pi-external-link',
          url: 'https://www.luxor.edu.eg',
          isExternal: true
        }
      ]
    };
  }
}