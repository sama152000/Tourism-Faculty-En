import { Routes } from '@angular/router';
import { HomeComponent } from './core/features/Faculty-of-tourism/Pages/Home/Home.component';
import { AboutUsComponent } from './core/features/Faculty-of-tourism/Pages/about-us/about-us.component';
import { DepartmentsComponent } from './core/features/Faculty-of-tourism/Pages/departments/departments.component';
import { SectorsComponent } from './core/features/Faculty-of-tourism/Pages/sectors/sectors.component';
import { UnitsComponent } from './core/features/Faculty-of-tourism/Pages/units/units.component';
import { ServicesComponent } from './core/features/Faculty-of-tourism/Pages/services/services.component';

export const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 { path: 'about', component: AboutUsComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'sectors', component: SectorsComponent },
    { path: 'units', component: UnitsComponent },
        { path: 'services', component: ServicesComponent },




    { path: '**', redirectTo: '/home' }

];
