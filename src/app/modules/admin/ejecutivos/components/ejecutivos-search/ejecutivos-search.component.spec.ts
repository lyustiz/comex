import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivosSearchComponent } from './ejecutivos-search.component';

describe('EjecutivosSearchComponent', () => {
  let component: EjecutivosSearchComponent;
  let fixture: ComponentFixture<EjecutivosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
