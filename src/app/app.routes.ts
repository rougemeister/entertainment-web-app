import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // AUTH ROUTES
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      {
        path: 'signup',
        loadComponent: () =>
          import('./features/sign-up/sign-up.component').then(
            (m) => m.SignUpComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./features/sign-in/sign-in.component').then(
            (m) => m.SignInComponent
          ),
      },
    ],
  },

  // MAIN APPLICATION ROUTES
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/layouts/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'media/:category',
        loadComponent: () =>
          import('./features/media-category/media-category.component').then(
            (m) => m.MediaCategoryComponent
          ),
      },
      {
        path: 'bookmarks',
        loadComponent: () =>
          import('./features/bookmarks/bookmarks.component').then(
            (m) => m.BookmarksComponent
          ),
      },
    ],
  },
  // Default Route
  { path: '**', redirectTo: '/signup', pathMatch: 'full' },
];
