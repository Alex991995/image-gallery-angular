import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroBanner } from '@components/hero-banner/hero-banner';
import { Api } from '@core/services/api';

interface IArrayCategories {
  name: string;
  slug: string;
  image: string;
}

@Component({
  selector: 'app-category',
  imports: [HeroBanner, RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {
  private api = inject(Api);
  arrayCategories = signal<IArrayCategories[]>([]);

  ngOnInit() {
    this.api.getCategories().subscribe((res) => this.arrayCategories.set(res));
  }
}
