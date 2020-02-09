import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzasFormComponent } from './cobranzas-form.component';

describe('CobranzasFormComponent', () => {
  let component: CobranzasFormComponent;
  let fixture: ComponentFixture<CobranzasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobranzasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
