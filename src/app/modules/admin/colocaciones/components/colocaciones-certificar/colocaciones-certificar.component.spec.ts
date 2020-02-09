import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocacionesCertificarComponent } from './colocaciones-certificar.component';

describe('ColocacionesCertificarComponent', () => {
  let component: ColocacionesCertificarComponent;
  let fixture: ComponentFixture<ColocacionesCertificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColocacionesCertificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColocacionesCertificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
