import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocacionesFormComponent } from './colocaciones-form.component';

describe('ColocacionesFormComponent', () => {
  let component: ColocacionesFormComponent;
  let fixture: ComponentFixture<ColocacionesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColocacionesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColocacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
