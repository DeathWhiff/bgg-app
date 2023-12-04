import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryPagePage } from './inventory-page.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryPagePageRoutingModule {}
