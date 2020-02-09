import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasStockListComponent } from './cartolas-stock-list.component';

describe('CartolasStockListComponent', () => {
  let component: CartolasStockListComponent;
  let fixture: ComponentFixture<CartolasStockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasStockListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
