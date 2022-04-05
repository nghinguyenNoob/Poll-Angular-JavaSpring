import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../item/checkbox.component';
import { CheckboxNewComponent } from './checkbox-new.component';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckboxNewComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule
  ],
  exports: [CheckboxNewComponent]
})
export class CheckboxNewModule { }
