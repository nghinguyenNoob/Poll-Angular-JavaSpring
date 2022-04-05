import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { SelectMultipleComponent } from './select-multiple.component';

@NgModule({
  declarations: [SelectMultipleComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    ScrollingModule
  ],
  exports: [
    SelectMultipleComponent
  ],
})
export class SelectMultipleModule {}
