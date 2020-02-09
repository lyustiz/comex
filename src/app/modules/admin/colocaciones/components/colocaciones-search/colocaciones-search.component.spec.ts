import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocacionesSearchComponent } from './colocaciones-search.component';

describe('ColocacionesSearchComponent', () => {
  let component: ColocacionesSearchComponent;
  let fixture: ComponentFixture<ColocacionesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColocacionesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColocacionesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
