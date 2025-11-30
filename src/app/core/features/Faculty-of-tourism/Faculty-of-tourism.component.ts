import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./Pages/shared/header/header.component";
import { FooterComponent } from "./Pages/shared/footer/footer.component";
import { QuickSidebarComponent } from "./Pages/shared/quick-sidebar/quick-sidebar.component";
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-Faculty-of-tourism',
  templateUrl: './Faculty-of-tourism.component.html',
  styleUrls: ['./Faculty-of-tourism.component.css'],
  imports: [ RouterModule]
})
export class FacultyOfTourismComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
