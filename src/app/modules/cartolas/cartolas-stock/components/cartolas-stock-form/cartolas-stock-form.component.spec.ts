import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasStockFormComponent } from './cartolas-stock-form.component';

describe('CartolasStockFormComponent', () => {
  let component: CartolasStockFormComponent;
  let fixture: ComponentFixture<CartolasStockFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasStockFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasStockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
