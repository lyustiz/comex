import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesSearchComponent } from './sucursales-search.component';

describe('SucursalesSearchComponent', () => {
  let component: SucursalesSearchComponent;
  let fixture: ComponentFixture<SucursalesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
