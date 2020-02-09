import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzasCertificarComponent } from './cobranzas-certificar.component';

describe('CobranzasCertificarComponent', () => {
  let component: CobranzasCertificarComponent;
  let fixture: ComponentFixture<CobranzasCertificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobranzasCertificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzasCertificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
