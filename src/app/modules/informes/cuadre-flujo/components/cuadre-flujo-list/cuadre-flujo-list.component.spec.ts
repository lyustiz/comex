import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadreFlujoListComponent } from './cuadre-flujo-list.component';

describe('CuadreFlujoListComponent', () => {
  let component: CuadreFlujoListComponent;
  let fixture: ComponentFixture<CuadreFlujoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadreFlujoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadreFlujoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
