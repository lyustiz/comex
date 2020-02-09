import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasFlujoListComponent } from './cartolas-flujo-list.component';

describe('CartolasFlujoListComponent', () => {
  let component: CartolasFlujoListComponent;
  let fixture: ComponentFixture<CartolasFlujoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasFlujoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasFlujoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
