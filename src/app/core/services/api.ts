import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponseApi } from 'app/interface/response-api.interface';
import { arrayTopics } from 'app/shared/constants/array-topics';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private readonly baseurl = 'https://api.unsplash.com';

  getCategories() {
    const requests = arrayTopics.map((t) => {
      return this.http.get<IResponseApi>(`${this.baseurl}/search/photos?query=${t.slug}`).pipe(
        map((res) => {
          return { name: t.name, slug: t.slug, image: res.results[0].urls.regular };
        }),
      );
    });

    return forkJoin(requests);
  }

  getCategoryPhotos(slug: string, page: number) {
    return this.http
      .get<IResponseApi>(`${this.baseurl}/search/photos?query=${slug}&per_page=12&page=${page}`)
      .pipe(map((res) => res.results));
  }
}
