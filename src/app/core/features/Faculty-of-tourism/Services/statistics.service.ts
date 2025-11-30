import { Injectable } from '@angular/core';
import { StatisticsData } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  getStatisticsData(): StatisticsData {
    return {
      title: 'Faculty Achievement Statistics',
      backgroundImage: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200',
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