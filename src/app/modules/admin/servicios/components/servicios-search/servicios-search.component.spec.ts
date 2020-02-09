import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSearchComponent } from './servicios-search.component';

describe('ServiciosSearchComponent', () => {
  let component: ServiciosSearchComponent;
  let fixture: ComponentFixture<ServiciosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
