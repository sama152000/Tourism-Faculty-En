import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { News, NewsPost, PostCategory } from '../model/news.model';
import { Category } from '../model/category.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = environment.apiUrl + 'posts';
  private categoriesUrl = environment.apiUrl + 'categories';

  constructor(private http: HttpClient) {}

  /**
   * جلب الأخبار بالـ pagination مع فلترة اختيارية
   * يدعم: pageNumber, pageSize, categoryId, title (بحث), status
   *
   * NOTE: The server returns a flat array and does not filter server-side,
   * so filtering and pagination are applied client-side here.
   */
  getPagedNews(
    pageNumber: number,
    pageSize: number,
    filter: { categoryId?: string; title?: string; status?: string; type?: string } = {}
  ): Observable<{ items: News[]; totalCount: number }> {
    const body: any = {
      pageNumber,
      pageSize,
      filter,
      orderByValue: [{ colId: 'createdDate', sort: 'desc' }]
    };

    return this.http.post<any>(`${this.baseUrl}/getpaged`, body).pipe(
      map(response => {
        // Normalise: API returns data as a flat array
        let allItems: News[];

        if (Array.isArray(response.data)) {
          allItems = response.data;
        } else if (response.data?.items) {
          allItems = response.data.items;
        } else {
          allItems = [];
        }

        // ── Client-side filtering (server ignores the filter object) ──

        if (filter.categoryId) {
          allItems = allItems.filter(p =>
            p.postCategories?.some(c => c.categoryId === filter.categoryId)
          );
        }

        if (filter.title) {
          const q = filter.title.toLowerCase();
          allItems = allItems.filter(p => p.title?.toLowerCase().includes(q));
        }

        if (filter.status) {
          allItems = allItems.filter(p => p.status === filter.status);
        }

        if (filter.type !== undefined && filter.type !== '') {
          allItems = allItems.filter(
            p => String(p.type) === String(filter.type)
          );
        }

        // ── Client-side pagination ──
        const totalCount = allItems.length;
        const start = (pageNumber - 1) * pageSize;
        const items = allItems.slice(start, start + pageSize);

        return { items, totalCount };
      })
    );
  }

  /** جلب كل التصنيفات */
  getCategories(): Observable<Category[]> {
    return this.http.get<{ success: boolean; data: Category[] }>(`${this.categoriesUrl}/getall`).pipe(
      map(response => response.data)
    );
  }

  /** جلب خبر واحد بالـ id */
  getNewsById(id: string): Observable<News> {
    return this.http.get<{ success: boolean; data: News }>(`${this.baseUrl}/get/${id}`).pipe(
      map(response => response.data)
    );
  }

  /** الأخبار المرتبطة بنفس التصنيف */
  getRelatedNews(post: News, limit: number = 4): Observable<News[]> {
    const categoryIds = post.postCategories.map(c => c.categoryId);
    const filter: any = { status: 'Published' };
    if (categoryIds.length > 0) {
      filter.categoryId = categoryIds[0];
    }
    // Fetch a large page so client-side category filtering has all posts to work with
    return this.getPagedNews(1, 100, filter).pipe(
      map(result => result.items.filter(p => p.id !== post.id).slice(0, limit))
    );
  }

  /** جلب آخر الأخبار للـ Home (type=0 فقط، بدون أحداث) */
  getLatestNews(limit: number = 4): Observable<News[]> {
    // Fetch a large page so client-side type filtering has all posts to work with
    return this.getPagedNews(1, 100, { status: 'Published', type: '0' }).pipe(
      map(result => result.items.slice(0, limit))
    );
  }

  /** جلب آخر الأحداث (Events) */
  getLatestEvents(limit: number = 3): Observable<News[]> {
    return this.getCategories().pipe(
      map(categories =>
        categories.find(c => c.name.toLowerCase() === 'events')
      ),
      switchMap(category => {
        const filter: any = { status: 'Published' };
        if (category) {
          filter.categoryId = category.id;
        }
        // Fetch a large page so client-side category filtering has all posts to work with
        return this.getPagedNews(1, 100, filter);
      }),
      map(result => result.items.slice(0, limit))
    );
  }
}
