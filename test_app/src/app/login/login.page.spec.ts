import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('T1. Email must have an invalid status initially', () => {
    expect(component.loginForm.controls.email.status).toBe('INVALID');
    expect(component.loginForm.getRawValue().email).toEqual('');
  });

  it('T2. Password must have an invalid status initially', () => {
    expect(component.loginForm.controls.password.status).toBe('INVALID');
    expect(component.loginForm.getRawValue().password).toEqual('');
  });

  it('T3. Reminder must have and invalid status initially', () => {
    expect(component.loginForm.controls.reminder.status).toBe('VALID');
    expect(component.loginForm.getRawValue().reminder).toBeFalsy();
  });

  it('T4. Reminder must remain valid whether its status is changed or not', () => {
    component.loginForm.controls.email.setValue(true);
    expect(component.loginForm.controls.reminder.status).toBe('VALID');
    component.loginForm.controls.email.setValue(false);
    expect(component.loginForm.controls.reminder.status).toBe('VALID');
    component.loginForm.controls.email.setValue('');
    expect(component.loginForm.controls.reminder.status).toBe('VALID');
  });  

  it('T5. Email must have a validation by email', () => {
    component.loginForm.controls.email.setValue('t4@t4.com');
    expect(component.loginForm.controls.email.status).toBe('VALID');
    component.loginForm.controls.email.setValue('t4.com');
    expect(component.loginForm.controls.email.status).toBe('INVALID');
    component.loginForm.controls.email.setValue('');
    expect(component.loginForm.controls.email.status).toBe('INVALID');
    component.loginForm.controls.email.setValue('*¨¨*%$=W!?"$·');
    expect(component.loginForm.controls.email.status).toBe('INVALID');
    component.loginForm.controls.email.setValue('a@odro');
    expect(component.loginForm.controls.email.status).toBe('INVALID');
    component.loginForm.controls.email.setValue('a@..com');
    expect(component.loginForm.controls.email.status).toBe('INVALID');
    component.loginForm.controls.email.setValue('123.dp3@m.com');
    expect(component.loginForm.controls.email.status).toBe('VALID');
  });
  it('T6. Password must have minimum five characters', () => {
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.controls.password.status).toBe('INVALID');
    component.loginForm.controls.password.setValue('1');
    expect(component.loginForm.controls.password.status).toBe('INVALID');
    component.loginForm.controls.password.setValue('11');
    expect(component.loginForm.controls.password.status).toBe('INVALID');
    component.loginForm.controls.password.setValue('123');
    expect(component.loginForm.controls.password.status).toBe('INVALID');
    component.loginForm.controls.password.setValue('1234');
    expect(component.loginForm.controls.password.status).toBe('INVALID');
    component.loginForm.controls.password.setValue('12345');
    expect(component.loginForm.controls.password.status).toBe('VALID');
    component.loginForm.controls.password.setValue('123456');
    expect(component.loginForm.controls.password.status).toBe('VALID');
  });


});
