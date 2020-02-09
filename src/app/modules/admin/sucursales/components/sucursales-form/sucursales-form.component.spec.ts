import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesFormComponent } from './sucursales-form.component';

describe('SucursalesFormComponent', () => {
  let component: SucursalesFormComponent;
  let fixture: ComponentFixture<SucursalesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
