import { Component } from '@angular/core';
import { HeroBanner } from '@components/hero-banner/hero-banner';

@Component({
  selector: 'app-category',
  imports: [HeroBanner],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {}
