import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AboutFacultyData } from '../model/AboutFacultyData.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutFacultyService {
  constructor(private http: HttpClient) {}

  /** Fetch faculty information from API */
  getAboutFacultyData(): Observable<AboutFacultyData> {
    return this.http.get<any>(`${environment.apiUrl}about/getall`).pipe(
      map(response => {
        const aboutUniversity = response.data.find((item: any) => item.pageType === 'AboutUniversity');
        
        if (aboutUniversity) {
          const highlights = aboutUniversity.goals
            ?.filter((g: any) => g.goalName)
            .map((g: any) => g.goalName) || [];

          return {
            aboutInfo: {
              title: aboutUniversity.title || 'About the Faculty',
              description: aboutUniversity.description || '',
              highlights: highlights,
              buttonText: 'Learn more about the Faculty',
              buttonLink: '/about/goals',
              mainImage: aboutUniversity.image || './assets/slide2.jpg',
              overlayImage: aboutUniversity.image || './assets/about.jpg'
            }
          } as AboutFacultyData;
        }

        // Default data if no API response
        return {
          aboutInfo: {
            title: 'About the Faculty',
            description: 'The Faculty of Tourism and Hotels at Luxor University is a leading institution...',
            highlights: [
              'Study programs combining theoretical learning and practical application',
              'Academic and professional supervision by top experts in the field',
              'Special focus on Egyptian cultural heritage and sustainable tourism',
              'Strong partnerships with major institutions and hotels'
            ],
            buttonText: 'Learn more about the Faculty',
            buttonLink: '/about',
            mainImage: './assets/slide2.jpg',
            overlayImage: './assets/about.jpg'
          }
        } as AboutFacultyData;
      })
    );
  }
}
