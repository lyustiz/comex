import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasComponent } from './cartolas.component';

describe('CartolasComponent', () => {
  let component: CartolasComponent;
  let fixture: ComponentFixture<CartolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
