import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { HeaderData } from '../model/header.model';
import { AboutTabsService } from './about-tabs.service';
import { DepartmentTabsService } from './department-tabs.service';
import { SectorsService } from './sectors.service';
import { ServicesService } from './services.service';
import { UnitsService } from './units.service';
import { ContentService } from './content.service';
import { ProgramsService } from './programs.service';
import { CentersService } from './centers.service';
import { ContactService } from './contact.service';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { AboutSection } from '../model/about-faculty.model';
import { Service } from '../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(
    private http: HttpClient,
    private aboutTabsService: AboutTabsService,
    private departmentTabsService: DepartmentTabsService,
    private sectorsService: SectorsService,
    @Inject(ServicesService) private servicesService: ServicesService,
    private unitsService: UnitsService,
    private contentService: ContentService,
    private programsService: ProgramsService,
    private centersService: CentersService,
    private contactService: ContactService
  ) {}

  getHeaderData(): Observable<HeaderData> {
    const logo$ = this.http.get<any>(`${environment.apiUrl}logos/getall`);
    const aboutSections$ = this.aboutTabsService.getAboutSections();
    const departments$ = this.departmentTabsService.getDepartments();
    const sectors$ = this.sectorsService.getSectors();
    const services$ = this.servicesService.getServices();
    const units$ = this.unitsService.getUnits();
    const contentCategories$ = this.contentService.getContentCategories();
    const programs$ = this.programsService.getPrograms();
    const centers$ = this.centersService.getCenters();
    const contacts$ = this.contactService.getContacts();

    return forkJoin([
      logo$, aboutSections$, departments$, sectors$, services$, units$, contentCategories$, programs$, centers$, contacts$
    ]).pipe(
      map(([logoResponse, aboutSections, departments, sectors, services, units, contentCategories, programs, centers, contacts]) => {
        const logoUrl = logoResponse.data[0]?.url || './assets/tour-logo.jpg';
        const contact = contacts.length > 0 ? contacts[0] : null;

        return {
          logo: logoUrl,
          title: 'Tourism and Hotels',
          searchPlaceholder: 'Search...',
          languageButton: 'English',
          socialLinks: [
            { id: '1', platform: 'Facebook', url: contact?.facebook || '#', icon: 'pi pi-facebook' },
            { id: '2', platform: 'Email', url: contact?.email ? `mailto:${contact.email}` : '#', icon: 'pi pi-envelope' },
          ],
          navigationItems: [
            { id: '1', label: 'Home', routerLink: '/' },
            {
              id: '2',
              label: 'About Us',
              routerLink: '/about',
              items: aboutSections.map((section: AboutSection) => ({
                id: `2-${section.slug}`,
                label: section.title,
                routerLink: '/about',
                queryParams: { tab: section.slug }
              }))
            },
            {
              id: '3',
              label: 'Departments',
              routerLink: '/departments',
              items: departments.map(dept => ({
                id: `3-${dept.slug}`, // ✅ using slug instead of id
                label: dept.name,
                routerLink: '/departments',
                queryParams: { tab: dept.slug } // ✅ queryParams with slug
              }))
            },
            {
              id: '4',
              label: 'Programs',
              routerLink: '/programs',
              items: programs.map(program => ({
                id: `4-${program.slug}`, // ✅ using slug instead of id
                label: program.pageTitle,
                routerLink: '/programs',
                queryParams: { tab: program.slug } // ✅ queryParams with slug
              }))
            },
            {
              id: '5',
              label: 'Centers',
              routerLink: '/centers',
              items: centers.map(center => ({
                id: `5-${center.slug}`, // ✅ using slug instead of id
                label: center.centerName,
                routerLink: '/centers',
                queryParams: { tab: center.slug } // ✅ queryParams with slug
              }))
            },
            {
              id: '6',
              label: 'News',
              routerLink: '/news-list'
            },
            {
              id: '7',
              label: 'Sectors',
              routerLink: '/sectors',
              items: sectors.map(sector => ({
                id: `7-${sector.slug}`,
                label: sector.name,
                routerLink: '/sectors',
                queryParams: { tab: sector.slug }
              }))
            },
            {
              id: '8',
              label: 'Services',
              routerLink: '/services',
              items: services.map(service => ({
                id: `8-${service.slug}`,
                label: service.title,
                routerLink: '/services',
                queryParams: { tab: service.slug }
              }))
            },
            {
              id: '9',
              label: 'Units',
              routerLink: '/units',
              items: units.map(unit => ({
                id: `9-${unit.slug}`,
                label: unit.unitTitle,
                routerLink: '/units',
                queryParams: { tab: unit.slug }
              }))
            },
            { id: '10', label: 'Contact Us', routerLink: '/contact' }
          ]
        } as HeaderData;
      })
    );
  }
}
