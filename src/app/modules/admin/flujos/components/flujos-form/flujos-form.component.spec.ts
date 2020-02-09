import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujosFormComponent } from './flujos-form.component';

describe('FlujosFormComponent', () => {
  let component: FlujosFormComponent;
  let fixture: ComponentFixture<FlujosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
