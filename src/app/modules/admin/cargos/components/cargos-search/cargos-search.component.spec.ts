import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosSearchComponent } from './cargos-search.component';

describe('CargosSearchComponent', () => {
  let component: CargosSearchComponent;
  let fixture: ComponentFixture<CargosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
