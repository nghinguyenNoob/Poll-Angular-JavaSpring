import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
