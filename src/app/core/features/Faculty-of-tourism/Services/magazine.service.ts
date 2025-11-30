import { Injectable } from '@angular/core';
import { MagazineData } from '../model/magazine.model';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  getMagazineData(): MagazineData {
    return {
      magazineInfo: {
        title: 'Faculty Research Magazine',
        description: 'The International Journal of Tourism and Hospitality Management (IJTHM) is our faculty\'s premier publication featuring cutting-edge research in tourism and hospitality. The latest issue explores job stress and its impact on employee performance in three-star hotels, examining psychological and physiological factors that contribute to organizational success.',
        buttonText: 'Read Latest Issue',
        buttonLink: 'https://ijthm.journals.ekb.eg/',
        coverImage: 'https://images.pexels.com/photos/159832/magazine-reading-relax-news-159832.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    };
  }
}