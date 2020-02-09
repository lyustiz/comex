import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasFlujoPdfComponent } from './cartolas-flujo-pdf.component';

describe('CartolasFlujoPdfComponent', () => {
  let component: CartolasFlujoPdfComponent;
  let fixture: ComponentFixture<CartolasFlujoPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasFlujoPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasFlujoPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
