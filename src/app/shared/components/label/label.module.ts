import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { LabelComponent } from './label.component';

@NgModule({
  declarations: [LabelComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    // MaterialCustomModule,
  ],
  exports: [
    LabelComponent
  ],
})
export class LabelModule {}
