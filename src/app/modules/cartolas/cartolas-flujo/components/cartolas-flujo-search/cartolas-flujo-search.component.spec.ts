import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartolasFlujoSearchComponent } from './cartolas-flujo-search.component';

describe('CartolasFlujoSearchComponent', () => {
  let component: CartolasFlujoSearchComponent;
  let fixture: ComponentFixture<CartolasFlujoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartolasFlujoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartolasFlujoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
