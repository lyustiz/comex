import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsSearchComponent } from './emails-search.component';

describe('EmailsSearchComponent', () => {
  let component: EmailsSearchComponent;
  let fixture: ComponentFixture<EmailsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
