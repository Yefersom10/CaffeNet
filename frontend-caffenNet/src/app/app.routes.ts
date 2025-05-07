import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./core/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () => import('./modules/user/products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'mainmenu',
    loadComponent: () => import('./modules/user/mainmenu/mainmenu.component').then((m) => m.MainmenuComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/user/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./modules/user/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'admin-login',
    loadComponent: () => import('./modules/admin/login-admin/login.page').then(m => m.LoginPage)
  },
  
];
