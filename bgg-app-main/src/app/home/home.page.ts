import { Component } from '@angular/core';
import { Boardgame } from '../models/boardgame';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  storeObjects: Boardgame[] = [
    {
      objectid: 1,
      name: "Test1",
      yearpublished: 4090
    }
  ];

  constructor() {}
}
