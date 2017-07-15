import { Routes, RouterModule } from '@angular/router';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
