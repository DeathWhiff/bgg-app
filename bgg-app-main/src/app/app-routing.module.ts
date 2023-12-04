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
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'wish-list',
    loadChildren: () => import('./wish-list/wish-list.module').then( m => m.WishListPageModule)
  },
  {
    path: 'inventory-page',
    loadChildren: () => import('./inventory-page/inventory-page.module').then( m => m.InventoryPagePageModule)
  },
  {
    path: 'search-boardgames-page',
    loadChildren: () => import('./search-boardgames-page/search-boardgames-page.module').then( m => m.SearchBoardgamesPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
