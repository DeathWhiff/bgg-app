import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBoardgamesPagePage } from './search-boardgames-page.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBoardgamesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBoardgamesPagePageRoutingModule {}
