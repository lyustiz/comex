import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujosSearchComponent } from './flujos-search.component';

describe('FlujosSearchComponent', () => {
  let component: FlujosSearchComponent;
  let fixture: ComponentFixture<FlujosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
