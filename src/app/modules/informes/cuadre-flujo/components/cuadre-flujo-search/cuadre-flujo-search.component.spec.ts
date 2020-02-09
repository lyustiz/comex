import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadreFlujoSearchComponent } from './cuadre-flujo-search.component';

describe('CuadreFlujoSearchComponent', () => {
  let component: CuadreFlujoSearchComponent;
  let fixture: ComponentFixture<CuadreFlujoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadreFlujoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadreFlujoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
