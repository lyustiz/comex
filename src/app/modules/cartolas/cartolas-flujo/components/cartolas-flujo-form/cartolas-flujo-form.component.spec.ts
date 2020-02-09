import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasFlujoFormComponent } from './cartolas-flujo-form.component';

describe('CartolasFlujoFormComponent', () => {
  let component: CartolasFlujoFormComponent;
  let fixture: ComponentFixture<CartolasFlujoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasFlujoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasFlujoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
