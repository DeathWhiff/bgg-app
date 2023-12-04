import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryPagePageRoutingModule } from './inventory-page-routing.module';

import { InventoryPagePage } from './inventory-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryPagePageRoutingModule
  ],
  declarations: [InventoryPagePage]
})
export class InventoryPagePageModule {}
