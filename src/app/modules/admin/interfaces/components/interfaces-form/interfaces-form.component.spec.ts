import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacesFormComponent } from './interfaces-form.component';

describe('InterfacesFormComponent', () => {
  let component: InterfacesFormComponent;
  let fixture: ComponentFixture<InterfacesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
