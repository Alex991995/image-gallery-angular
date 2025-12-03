import { Component, inject, input, OnInit, signal } from '@angular/core';
import { HeroBanner } from '@components/hero-banner/hero-banner';
import { Api } from '@core/services/api';
import { Pagination } from '@components/pagination/pagination';

@Component({
  selector: 'app-images',
  imports: [HeroBanner, Pagination],
  templateUrl: './images.html',
  styleUrl: './images.css',
})
export class Images implements OnInit {
  private api = inject(Api);
  protected topic = input.required<string>();

  protected page = signal(1);
  protected readonly totalPages = 100;

  findCategory() {
    console.log('ss');
  }

  loadPage($page: number) {
    const slug = this.topic();
    const page = $page;
    console.log(page);
    this.api.getCategoryPhotos(slug, page).subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    const slug = this.topic();
    const page = this.page();
    this.api.getCategoryPhotos(slug, page).subscribe((res) => console.log(res));
  }
}
