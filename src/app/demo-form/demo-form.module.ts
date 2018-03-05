import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoFormComponent } from './demo-form/demo-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [DemoFormComponent],
  exports: [DemoFormComponent]
})
export class DemoFormModule { }
