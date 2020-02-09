import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivosFormComponent } from './ejecutivos-form.component';

describe('EjecutivosFormComponent', () => {
  let component: EjecutivosFormComponent;
  let fixture: ComponentFixture<EjecutivosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
