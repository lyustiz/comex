import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocacionesListComponent } from './colocaciones-list.component';

describe('ColocacionesListComponent', () => {
  let component: ColocacionesListComponent;
  let fixture: ComponentFixture<ColocacionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColocacionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColocacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
