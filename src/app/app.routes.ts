import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./pages/form/form.component').then(m => m.FormComponent)
  },
  {
    path: 'building-license',
    loadComponent: () =>
      import('./pages/building-license/building-license.component').then(
        m => m.BuildingLicenseComponent
      )
  },
  { path: '**', redirectTo: '' }
];
