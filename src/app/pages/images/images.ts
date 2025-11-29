import { Component } from '@angular/core';
import { HeroBanner } from '@components/hero-banner/hero-banner';

@Component({
  selector: 'app-images',
  imports: [HeroBanner],
  templateUrl: './images.html',
  styleUrl: './images.css',
})
export class Images {
  findCategory() {
    console.log('ss');
  }
}
