import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosSearchComponent } from './parametros-search.component';

describe('ParametrosSearchComponent', () => {
  let component: ParametrosSearchComponent;
  let fixture: ComponentFixture<ParametrosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
