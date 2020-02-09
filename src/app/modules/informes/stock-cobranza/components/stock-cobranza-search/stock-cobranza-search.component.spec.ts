import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCobranzaSearchComponent } from './stock-cobranza-search.component';

describe('StockCobranzaSearchComponent', () => {
  let component: StockCobranzaSearchComponent;
  let fixture: ComponentFixture<StockCobranzaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCobranzaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCobranzaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
