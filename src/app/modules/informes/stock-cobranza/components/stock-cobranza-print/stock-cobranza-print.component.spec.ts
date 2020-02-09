import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCobranzaPrintComponent } from './stock-cobranza-print.component';

describe('StockCobranzaPrintComponent', () => {
  let component: StockCobranzaPrintComponent;
  let fixture: ComponentFixture<StockCobranzaPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCobranzaPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCobranzaPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
