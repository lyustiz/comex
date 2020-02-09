import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockColocacionesPrintComponent } from './stock-colocaciones-print.component';

describe('StockColocacionesPrintComponent', () => {
  let component: StockColocacionesPrintComponent;
  let fixture: ComponentFixture<StockColocacionesPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockColocacionesPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockColocacionesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
