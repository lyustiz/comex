import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasFlujoDetailComponent } from './cartolas-flujo-detail.component';

describe('CartolasFlujoDetailComponent', () => {
  let component: CartolasFlujoDetailComponent;
  let fixture: ComponentFixture<CartolasFlujoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasFlujoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasFlujoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
