import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'soda-list',
    loadChildren: () => import('./soda-list/soda-list.module').then( m => m.SodaListPageModule)
  },
  {
    path: 'add-soda',
    loadChildren: () => import('./add-soda/add-soda.module').then( m => m.AddSodaPageModule)
  },
  {
    path: 'update-soda',
    loadChildren: () => import('./update-soda/update-soda.module').then( m => m.UpdateSodaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
