import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { NewsPost, NewsCategory, NewsTabsData } from '../model/news.model';
import { map, Observable } from 'rxjs';
import { slugify } from '../../../../utilities/slug.util'; // ✅ Import slugify function

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNewsTabsData(): Observable<NewsTabsData> {
    return this.http.get<any>(`${environment.apiUrl}posts/getall`).pipe(
      map(res => {
        const posts: NewsPost[] = res.data.map((post: any) => {
          const s = slugify(post.title || post.urlTitleEn || '');
          return {
            ...post,
            slug: s || `news-${post.id}`
          } as NewsPost;
        });

        // Group posts by categoryName
        const categoryMap: { [key: string]: NewsPost[] } = {};
        posts.forEach(post => {
          post.postCategories.forEach(cat => {
            if (!categoryMap[cat.categoryName]) {
              categoryMap[cat.categoryName] = [];
            }
            categoryMap[cat.categoryName].push(post);
          });
        });

        const categories: NewsCategory[] = Object.keys(categoryMap).map(name => ({
          categoryName: name,
          posts: categoryMap[name]
        }));

        return {
          title: 'News & Events',
          subtitle: 'Follow the latest news and events of the faculty',
          sections: categories
        } as NewsTabsData;
      })
    );
  }

  getNews(): Observable<NewsPost[]> {
    return this.http.get<any>(`${environment.apiUrl}posts/getall`).pipe(
      map(res => res.data.map((post: any) => {
        const s = slugify(post.title || post.urlTitleEn || '');
        return { ...post, slug: s || `news-${post.id}` } as NewsPost;
      }))
    );
  }

  getLatestNews(limit: number = 3): Observable<NewsPost[]> {
    return this.http.get<any>(`${environment.apiUrl}posts/getall`).pipe(
      map(res => {
        const posts: NewsPost[] = res.data.map((post: any) => {
          const s = slugify(post.title || post.urlTitleEn || '');
          return { ...post, slug: s || `news-${post.id}` } as NewsPost;
        });

        const sortedPosts = posts.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());

        const newsOnly = sortedPosts.filter(p =>
          p.postCategories.some(c => c.categoryName === 'News')
        );

        return newsOnly.slice(0, limit);
      })
    );
  }

  getLatestEvents(limit: number = 3): Observable<NewsPost[]> {
    return this.http.get<any>(`${environment.apiUrl}posts/getall`).pipe(
      map(res => {
        const posts: NewsPost[] = res.data.map((post: any) => {
          const s = slugify(post.title || post.urlTitleEn || '');
          return { ...post, slug: s || `news-${post.id}` } as NewsPost;
        });

        const sortedPosts = posts.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());

        const eventsOnly = sortedPosts.filter(p =>
          p.postCategories.some(c => c.categoryName === 'Events')
        );

        return eventsOnly.slice(0, limit);
      })
    );
  }

  getLatestConferences(limit: number = 3): Observable<NewsPost[]> {
    return this.http.get<any>(`${environment.apiUrl}posts/getall`).pipe(
      map(res => {
        const posts: NewsPost[] = res.data.map((post: any) => {
          const s = slugify(post.title || post.urlTitleEn || '');
          return { ...post, slug: s || `news-${post.id}` } as NewsPost;
        });

        const sortedPosts = posts.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());

        const conferencesOnly = sortedPosts.filter(p =>
          p.postCategories.some(c => c.categoryName === 'Conferences')
        );

        return conferencesOnly.slice(0, limit);
      })
    );
  }
}
