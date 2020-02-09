import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasFlujoPrintComponent } from './cartolas-flujo-print.component';

describe('CartolasFlujoPrintComponent', () => {
  let component: CartolasFlujoPrintComponent;
  let fixture: ComponentFixture<CartolasFlujoPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasFlujoPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasFlujoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
