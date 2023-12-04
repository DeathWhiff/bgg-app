import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryPagePage } from './inventory-page.page';

describe('InventoryPagePage', () => {
  let component: InventoryPagePage;
  let fixture: ComponentFixture<InventoryPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InventoryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
