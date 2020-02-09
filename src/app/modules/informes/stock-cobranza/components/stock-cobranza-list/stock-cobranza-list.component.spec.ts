import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCobranzaListComponent } from './stock-cobranza-list.component';

describe('StockCobranzaListComponent', () => {
  let component: StockCobranzaListComponent;
  let fixture: ComponentFixture<StockCobranzaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCobranzaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCobranzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
