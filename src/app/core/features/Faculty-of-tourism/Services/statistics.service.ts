import { Injectable } from '@angular/core';
import { StatisticsData } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  getStatisticsData(): StatisticsData {
    return {
      title: 'Faculty Achievement Statistics',
      backgroundImage: './assets/tour2.jpg',
      statistics: [
        {
          id: '1',
          value: 2500,
          label: 'Students Enrolled',
          icon: 'pi pi-users'
        },
        {
          id: '2',
          value: 1200,
          label: 'Graduates',
          icon: 'pi pi-graduation-cap'
        },
        {
          id: '3',
          value: 85,
          label: 'Faculty Members',
          icon: 'pi pi-user'
        },
        {
          id: '4',
          value: 40,
          label: 'International Partnerships',
          icon: 'pi pi-globe'
        }
      ]
    };
  }
}