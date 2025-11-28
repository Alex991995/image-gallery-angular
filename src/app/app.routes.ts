import { Routes } from '@angular/router';
import { Layout } from '@layout/layout';
import { Category } from '@pages/category/category';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Category },
      {
        path: 'images',
        loadComponent: () => import('@pages/images/images').then((m) => m.Images),
      },
      {
        path: 'favourites',
        loadComponent: () => import('@pages/favourites/favourites').then((m) => m.Favourites),
      },
    ],
  },
];
