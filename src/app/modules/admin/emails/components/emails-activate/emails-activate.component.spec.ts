import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsActivateComponent } from './emails-activate.component';

describe('EmailsActivateComponent', () => {
  let component: EmailsActivateComponent;
  let fixture: ComponentFixture<EmailsActivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsActivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
