import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { confirmPasswordValidator } from './../password.validator';

@Component({
  selector: 'demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  public form: FormGroup;
  public username: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;

  public ngOnInit(): void {
    this.username = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.confirmPassword = new FormControl('', [Validators.required, confirmPasswordValidator(this.password)]);

    this.password.registerOnChange(() => this.confirmPassword.updateValueAndValidity());

    this.form = new FormGroup({
      'username': this.username,
      'password': this.password,
      'confirmPassword': this.confirmPassword
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      console.log('Form is valid!');
    } else {
      console.log('Form is not valid.');
    }
  }
}
