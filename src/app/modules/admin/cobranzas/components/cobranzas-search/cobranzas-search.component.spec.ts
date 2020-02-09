import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzasSearchComponent } from './cobranzas-search.component';

describe('CobranzasSearchComponent', () => {
  let component: CobranzasSearchComponent;
  let fixture: ComponentFixture<CobranzasSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobranzasSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzasSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
