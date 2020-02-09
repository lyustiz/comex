import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsCuentasComponent } from './emails-cuentas.component';

describe('EmailsCuentasComponent', () => {
  let component: EmailsCuentasComponent;
  let fixture: ComponentFixture<EmailsCuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsCuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
