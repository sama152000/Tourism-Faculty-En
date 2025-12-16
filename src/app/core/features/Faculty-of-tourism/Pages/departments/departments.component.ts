import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DepartmentTabsService } from '../../Services/department-tabs.service';
import { DepartmentTabsData, Department } from '../../model/departments.model';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
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
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.departmentTabsService.getDepartmentTabsData().subscribe(data => {
        this.departmentData = data;
        if (id && data.sections.some(s => s.id === id)) {
          this.selectedTab = id;
        } else if (data.sections.length) {
          this.selectedTab = data.sections[0].id; // أول قسم افتراضي
        }

        this.route.queryParams.subscribe(qparams => {
          if (qparams['tab'] && data.sections.some(s => s.id === qparams['tab'])) {
            this.selectedTab = qparams['tab'];
          }
        });
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
