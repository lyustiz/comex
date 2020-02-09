import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacesSearchComponent } from './interfaces-search.component';

describe('InterfacesSearchComponent', () => {
  let component: InterfacesSearchComponent;
  let fixture: ComponentFixture<InterfacesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
