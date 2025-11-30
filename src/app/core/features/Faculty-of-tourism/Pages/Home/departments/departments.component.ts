import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsService } from '../../../Services/departments.service';
import { DepartmentsData } from '../../../model/departments.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentsData!: DepartmentsData;

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.departmentsData = this.departmentsService.getDepartmentsData();
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