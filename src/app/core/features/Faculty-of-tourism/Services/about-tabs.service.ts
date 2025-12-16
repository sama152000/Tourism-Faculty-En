import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AboutTabsData, AboutSection } from '../model/about-faculty.model';
import { map, forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutTabsService {
  constructor(private http: HttpClient) {}

  // الميثود الأساسية اللي بتجيب كل الداتا
  getAboutTabsData(): Observable<AboutTabsData> {
    const about$ = this.http.get<any>(`${environment.apiUrl}about/getall`);
    const dean$ = this.http.get<any>(`${environment.apiUrl}deanspeechs/getall`);

    return forkJoin([about$, dean$]).pipe(
      map(([aboutResponse, deanResponse]) => {
        const aboutUniversity = aboutResponse.data.find((item: any) => item.pageType === 'AboutUniversity');

        const sections: AboutSection[] = [];

        if (aboutUniversity) {
          sections.push({
            id: 'vision-mission',
            title: 'Vision & Mission ',
            content: `${aboutUniversity.vision}\n\n${aboutUniversity.mission}`,
            additionalInfo: aboutUniversity.content,
          });

         sections.push({
  id: 'goals',
  title: 'Goals ',
  content: aboutUniversity.goals
    .filter((g: any) => g.goalName) // استبعد الـ null
    .map((g: any) => `• ${g.goalName}`)
    .join('\n')
});


          if (aboutUniversity.history) {
            sections.push({
              id: 'history',
              title: 'History',
              content: aboutUniversity.history
            });
          }
        }

        const deanSpeech = deanResponse.data[0];
        if (deanSpeech) {
          sections.push({
            id: 'dean-word',
            title: 'Dean word',
            content: deanSpeech.speech,
            additionalInfo: `${deanSpeech.memberName} - ${deanSpeech.memberPosition}`,
            image: deanSpeech.deanSpeechAttachments?.[0]?.url
          });
        }

        return {
        title: 'About the Faculty of Tourism and Hotels',
subtitle: 'Learn more about our faculty through the following comprehensive sections',
sections,
aboutInfo: {
  title: 'About the Faculty',


            overlayImage: aboutUniversity?.image || '' // assuming aboutUniversity has image
          }
        } as AboutTabsData;
      })
    );
  }

  // الميثود اللي محتاجها الـ Header
  getAboutSections(): Observable<AboutSection[]> {
    return this.getAboutTabsData().pipe(
      map(data => data.sections)
    );
  }
}
