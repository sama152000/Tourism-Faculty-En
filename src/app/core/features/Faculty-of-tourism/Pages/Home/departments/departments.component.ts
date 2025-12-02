import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentTabsService } from '../../../Services/department-tabs.service';
import { DepartmentsData } from '../../../model/departments.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DepartmentsService } from '../../../Services/departments.service';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule, ButtonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentsData!: DepartmentsData;

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    const data = this.departmentsService.getDepartmentsData();
    this.departmentsData = {
      ...data,
      departments: data.departments.slice(0, 3)
    };
  }

  getDeptFeatures(deptId: string): string[] {
    const features: { [key: string]: string[] } = {
      '1': ['Heritage Sites', 'Tour Planning', 'Cultural Studies'],
      '2': ['Operations', 'F&B Management', 'Service Quality'],
      '3': ['Professional Guiding', 'Interpretation', 'Communication'],
      '4': ['Eco-Tourism', 'Conservation', 'Community Tourism']
    };
    return features[deptId] || [];
  }
}