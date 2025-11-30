import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { arrayTopics } from 'app/shared/constants/array-topics';
import { forkJoin, map } from 'rxjs';

const YOUR_ACCESS_KEY = '0yd4JlUlsULT7DoO7ISN3OA0fslGsvNWlVq4UHZxHb4';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  headers = new HttpHeaders({
    Authorization: 'Client-ID' + YOUR_ACCESS_KEY,
  });
  private readonly baseurl = 'https://api.unsplash.com';

  getCategories() {
    const requests = arrayTopics.map((t) => {
      return this.http
        .get<Root>(`${this.baseurl}/search/photos?query=${t.slug}&client_id=${YOUR_ACCESS_KEY}`)
        .pipe(
          map((res) => {
            return { name: t.name, slug: t.slug, image: res.results[0].urls.regular };
          }),
        );
    });

    return forkJoin(requests);
  }
}

export interface Root {
  total: number;
  total_pages: number;
  results: Result[];
}

export interface Result {
  urls: Urls;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
