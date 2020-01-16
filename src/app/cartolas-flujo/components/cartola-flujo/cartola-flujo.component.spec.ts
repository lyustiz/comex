import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolaFlujoComponent } from './cartola-flujo.component';

describe('CartolaFlujoComponent', () => {
  let component: CartolaFlujoComponent;
  let fixture: ComponentFixture<CartolaFlujoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolaFlujoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolaFlujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
