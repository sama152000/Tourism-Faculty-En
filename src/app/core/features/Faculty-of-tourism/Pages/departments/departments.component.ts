import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DepartmentTabsService } from '../../Services/department-tabs.service';
import { DepartmentTabsData, Department } from '../../model/departments.model';
import { CleanHtmlPipe } from '../../../../pipes/clean-html.pipe'; // ✅ استدعاء الـ Pipe


@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, CleanHtmlPipe],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentData: DepartmentTabsData = {
    title: '',
    subtitle: '',
    sections: []
  };
  selectedTab: string = '';

  constructor(
    private departmentTabsService: DepartmentTabsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departmentTabsService.getDepartmentTabsData().subscribe(data => {
      this.departmentData = data;

      // First check queryParams for tab selection
      this.route.queryParams.subscribe(qparams => {
        const tabParam = qparams['tab'];
        if (tabParam && data.sections.some(s => s.slug === tabParam)) {
          this.selectedTab = tabParam;
        } else if (data.sections.length) {
          this.selectedTab = data.sections[0].slug || data.sections[0].id;
        }
      });

      // Also check route params
      this.route.params.subscribe((params: Params) => {
        const id = params['id'];
        if (id) {
          // Check if it's a slug or id
          if (data.sections.some(s => s.slug === id)) {
            this.selectedTab = id;
          } else if (data.sections.some(s => s.id === id)) {
            this.selectedTab = id;
          }
        }
      });
    });
  }

  onTabChange(id: string): void {
    this.selectedTab = id;

    // Update URL without reloading
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: this.selectedTab },
      queryParamsHandling: 'merge'
    });
  }

  getFacultyCount(department: Department): number {
    return department.members?.length || 0;
  }

  getServicesCount(department: Department): number {
    return department.services?.length || 0;
  }
}
