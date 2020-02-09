import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasStockSearchComponent } from './cartolas-stock-search.component';

describe('CartolasStockSearchComponent', () => {
  let component: CartolasStockSearchComponent;
  let fixture: ComponentFixture<CartolasStockSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasStockSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasStockSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
