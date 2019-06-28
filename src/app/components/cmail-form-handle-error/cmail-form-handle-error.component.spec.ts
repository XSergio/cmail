import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailFormHandleErrorComponent } from './cmail-form-handle-error.component';

describe('CmailFormHandleErrorComponent', () => {
  let component: CmailFormHandleErrorComponent;
  let fixture: ComponentFixture<CmailFormHandleErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmailFormHandleErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailFormHandleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
