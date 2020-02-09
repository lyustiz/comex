import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasFlujoXlsComponent } from './cartolas-flujo-xls.component';

describe('CartolasFlujoXlsComponent', () => {
  let component: CartolasFlujoXlsComponent;
  let fixture: ComponentFixture<CartolasFlujoXlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasFlujoXlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasFlujoXlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
