import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBoardgamesPagePage } from './search-boardgames-page.page';

describe('SearchBoardgamesPagePage', () => {
  let component: SearchBoardgamesPagePage;
  let fixture: ComponentFixture<SearchBoardgamesPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchBoardgamesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
