import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFormComponent } from './signin-form.component';

describe('LoginFormComponent', () => {
  let component: SigninFormComponent;
  let fixture: ComponentFixture<SigninFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninFormComponent]
    });
    fixture = TestBed.createComponent(SigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});