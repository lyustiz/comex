import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockColocacionesSearchComponent } from './stock-colocaciones-search.component';

describe('StockColocacionesSearchComponent', () => {
  let component: StockColocacionesSearchComponent;
  let fixture: ComponentFixture<StockColocacionesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockColocacionesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockColocacionesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
