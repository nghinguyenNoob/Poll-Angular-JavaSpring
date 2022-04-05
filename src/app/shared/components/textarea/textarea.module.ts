import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextareaComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule
  ],
  exports: [TextareaComponent]
})
export class TextareaModule { }
