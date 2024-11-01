import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ramos',
  loadChildren: () => import('./pages/main/ramos/ramos.module').then( m => m.RamosPageModule)
},
{
  path: 'login',
  loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
},
{
  path: 'mapa',
  loadChildren: () => import('./pages/mapa/mapa.module').then(m => m.MapaPageModule)
},
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
