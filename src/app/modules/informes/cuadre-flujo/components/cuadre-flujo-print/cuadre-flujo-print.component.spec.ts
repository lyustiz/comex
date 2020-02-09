import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadreFlujoPrintComponent } from './cuadre-flujo-print.component';

describe('CuadreFlujoPrintComponent', () => {
  let component: CuadreFlujoPrintComponent;
  let fixture: ComponentFixture<CuadreFlujoPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadreFlujoPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadreFlujoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
