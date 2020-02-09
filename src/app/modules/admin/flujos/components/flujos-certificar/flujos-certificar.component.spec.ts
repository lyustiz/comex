import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujosCertificarComponent } from './flujos-certificar.component';

describe('FlujosCertificarComponent', () => {
  let component: FlujosCertificarComponent;
  let fixture: ComponentFixture<FlujosCertificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujosCertificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujosCertificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
