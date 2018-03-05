import { TestBed, async } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { DemoFormComponent } from './demo-form.component';

describe('DemoFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        DemoFormComponent
      ],
    }).compileComponents();
  }));

  let component: DemoFormComponent;

  beforeEach(() => {
    const fixture = TestBed.createComponent(DemoFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  describe('username', () => {
    it('should be valid with between 4 and 10 characters (inclusive)', async(() => {
      component.username.setValue('aaaaaaaaaa');

      expect(component.username.valid).toBeTruthy();
    }));

    it('should be required', async(() => {
      expect(component.username.errors['required']).toBeDefined();

      component.username.setValue('a');

      expect(component.username.errors['required']).toBeUndefined();
    }));

    it('should have an error with fewer than 4 characters', async(() => {
      component.username.setValue('aaa');
      expect(component.username.errors.minlength).toBeDefined();
    }));

    it('should have an error with more than 10 characters', async(() => {
      component.username.setValue('aaaaaaaaaaa');
      expect(component.username.errors.maxlength).toBeDefined();
    }));
  });

  describe('password', () => {
    it('should be valid with more than 6 characters', async(() => {
      component.password.setValue('aaaaaaaaaa');

      expect(component.password.valid).toBeTruthy();
    }));

    it('should be required', async(() => {
      expect(component.password.errors['required']).toBeDefined();

      component.password.setValue('a');

      expect(component.password.errors['required']).toBeUndefined();
    }));
  });

  describe('confirmPassword', () => {
    it('should be valid if it matches the password', async(() => {
      component.password.setValue('aaaaaaaaaa');
      component.confirmPassword.setValue('aaaaaaaaaa');

      expect(component.confirmPassword.valid).toBeTruthy();
    }));

    it('should be required', async(() => {
      expect(component.confirmPassword.errors['required']).toBeDefined();

      component.confirmPassword.setValue('a');

      expect(component.confirmPassword.errors['required']).toBeUndefined();
    }));

    it('should have an error if it does not match the password', async(() => {
      component.password.setValue('aaaaaaaaaa');
      component.confirmPassword.setValue('bbbbbbbb');
      expect(component.confirmPassword.errors.passwordMismatch).toBeDefined();
    }));
  });
});
