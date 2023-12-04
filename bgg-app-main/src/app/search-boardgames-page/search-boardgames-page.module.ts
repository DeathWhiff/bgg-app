import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBoardgamesPagePageRoutingModule } from './search-boardgames-page-routing.module';

import { SearchBoardgamesPagePage } from './search-boardgames-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBoardgamesPagePageRoutingModule
  ],
  declarations: [SearchBoardgamesPagePage]
})
export class SearchBoardgamesPagePageModule {}
