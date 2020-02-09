import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivosListComponent } from './ejecutivos-list.component';

describe('EjecutivosListComponent', () => {
  let component: EjecutivosListComponent;
  let fixture: ComponentFixture<EjecutivosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
