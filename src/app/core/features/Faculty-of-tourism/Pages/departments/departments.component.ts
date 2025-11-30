import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentTabsService } from '../../Services/department-tabs.service';
import { DepartmentDetail, DepartmentTabsData } from '../../model/departments.model';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentData!: DepartmentTabsData;
  selectedTab: string = 'tourism-studies';

  constructor(
    private departmentTabsService: DepartmentTabsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departmentData = this.departmentTabsService.getDepartmentTabsData();

    // Handle query parameters for tab selection
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        this.selectedTab = params['tab'];
      }
    });
  }

  onTabChange(value: string | number | undefined): void {
    if (value) {
      this.selectedTab = value.toString();

      // Update URL without reloading
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { tab: this.selectedTab },
        queryParamsHandling: 'merge'
      });
    }
  }
}