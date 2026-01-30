import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AboutTabsData, AboutSection } from '../model/about-faculty.model';
import { map, forkJoin, Observable } from 'rxjs';
import { slugify } from '../../../../utilities/slug.util'; // ✅ slugify function

@Injectable({
  providedIn: 'root'
})
export class AboutTabsService {
  constructor(private http: HttpClient) {}

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
            title: 'Vision & Mission',
            content: `${aboutUniversity.vision}\n\n${aboutUniversity.mission}`,
            additionalInfo: aboutUniversity.content,
            slug: slugify('Vision & Mission') // ✅ generate slug
          });

          sections.push({
            id: 'goals',
            title: 'Faculty Goals',
            content: aboutUniversity.goals
              .filter((g: any) => g.goalName)
              .map((g: any) => `• ${g.goalName}`)
              .join('\n'),
            slug: slugify('Faculty Goals') // ✅ generate slug
          });

          if (aboutUniversity.history) {
            sections.push({
              id: 'history',
              title: 'Faculty History',
              content: aboutUniversity.history,
              slug: slugify('Faculty History') // ✅ generate slug
            });
          }
        }

        const deanSpeech = deanResponse.data[0];
        if (deanSpeech) {
          sections.push({
            id: 'dean-word',
            title: "Dean's Message",
            content: deanSpeech.speech,
            additionalInfo: `${deanSpeech.memberName} - ${deanSpeech.memberPosition}`,
            image: deanSpeech.deanSpeechAttachments?.[0]?.url,
            slug: slugify("Dean's Message") // ✅ generate slug
          });
        }

        return {
          title: 'About Faculty of Tourism & Hotels',
          subtitle: 'Learn more about our faculty through the following sections',
          sections,
          aboutInfo: {
            title: 'About the Faculty',
            overlayImage: aboutUniversity?.image || ''
          }
        } as AboutTabsData;
      })
    );
  }

  getAboutSections(): Observable<AboutSection[]> {
    return this.getAboutTabsData().pipe(
      map(data => data.sections)
    );
  }
}
