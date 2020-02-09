import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasStockDetailComponent } from './cartolas-stock-detail.component';

describe('CartolasStockDetailComponent', () => {
  let component: CartolasStockDetailComponent;
  let fixture: ComponentFixture<CartolasStockDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasStockDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasStockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
