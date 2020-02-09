import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujosListComponent } from './flujos-list.component';

describe('FlujosListComponent', () => {
  let component: FlujosListComponent;
  let fixture: ComponentFixture<FlujosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
