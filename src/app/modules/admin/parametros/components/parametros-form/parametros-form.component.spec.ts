import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosFormComponent } from './parametros-form.component';

describe('ParametrosFormComponent', () => {
  let component: ParametrosFormComponent;
  let fixture: ComponentFixture<ParametrosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
