import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalUpdateComponent } from './sucursal-update.component';

describe('SucursalUpdateComponent', () => {
  let component: SucursalUpdateComponent;
  let fixture: ComponentFixture<SucursalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
