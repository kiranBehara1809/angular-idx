import { Routes } from '@angular/router';
import { AuthGuard } from './guards/Auth';

export const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
{ path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
{ path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
];
