import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockColocacionesListComponent } from './stock-colocaciones-list.component';

describe('StockColocacionesListComponent', () => {
  let component: StockColocacionesListComponent;
  let fixture: ComponentFixture<StockColocacionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockColocacionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockColocacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
