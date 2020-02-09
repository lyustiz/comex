import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzasListComponent } from './cobranzas-list.component';

describe('CobranzasListComponent', () => {
  let component: CobranzasListComponent;
  let fixture: ComponentFixture<CobranzasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobranzasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
