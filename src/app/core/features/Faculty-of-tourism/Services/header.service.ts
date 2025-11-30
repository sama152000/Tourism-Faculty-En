import { Injectable } from '@angular/core';
import { HeaderData } from '../model/header.model';
import { AboutTabsService } from './about-tabs.service';
import { DepartmentTabsService } from './department-tabs.service';
import { SectorsService } from './sectors.service';
import { ServicesService } from './services.service';
import { UnitsService } from './units.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private aboutTabsService: AboutTabsService,
    private departmentTabsService: DepartmentTabsService,
    private sectorsService: SectorsService,
    private servicesService: ServicesService,
    private unitsService: UnitsService
  ) {}

  getHeaderData(): HeaderData {
    const aboutSections = this.aboutTabsService.getAboutSections();
    const departments = this.departmentTabsService.getDepartments();
    const sectors = this.sectorsService.getSectors();
    const services = this.servicesService.getServices();
    const units = this.unitsService.getUnits();

    return {
      logo: './assets/tour-logo.jpg',
      title: 'Faculty of Tourism & Hotels',
      searchPlaceholder: 'Search...',
      languageButton: 'العربية',
      socialLinks: [
        { id: '1', platform: 'Facebook', url: '#', icon: 'pi pi-facebook' },
        { id: '2', platform: 'Twitter', url: '#', icon: 'pi pi-twitter' },
        { id: '3', platform: 'Instagram', url: '#', icon: 'pi pi-instagram' }
      ],
      navigationItems: [
        { 
          id: '1', 
          label: 'Home', 
          routerLink: '/' 
        },
        {
          id: '2',
          label: 'About',
          items: aboutSections.map(section => ({
            id: `2-${section.id}`,
            label: section.title,
            routerLink: '/about',
            queryParams: { tab: section.id }
          }))
        },
        {
          id: '3',
          label: 'Departments',
          items: departments.map(dept => ({
            id: `3-${dept.id}`,
            label: dept.name,
            routerLink: '/departments',
            queryParams: { tab: dept.id }
          }))
        },
        {
          id: '4',
          label: 'News',
          items: [
            { id: '4-1', label: 'News', routerLink: '/news' },
            { id: '4-2', label: 'Articles', routerLink: '/articles' },
            { id: '4-2', label: 'Events', routerLink: '/events' },
            { id: '4-3', label: 'Announcements', routerLink: '/announcements' }
          ]
        },
        {
          id: '5',
          label: 'Sectors',
          items: sectors.map(sector => ({
            id: `5-${sector.id}`,
            label: sector.name,
            routerLink: '/sectors',
            queryParams: { tab: sector.id }
          }))
        },
        {
          id: '7',
          label: 'Services',
          items: services.map(service => ({
            id: `7-${service.id}`,
            label: service.name,
            routerLink: '/services',
            queryParams: { tab: service.id }
          }))
        },
        {
          id: '8',
          label: 'Units',
          items: units.map(unit => ({
            id: `8-${unit.id}`,
            label: unit.name,
            routerLink: '/units',
            queryParams: { tab: unit.id }
          }))
        },
        { id: '9', label: 'Contact', routerLink: '/contact' }
      ]
    };
  }
}