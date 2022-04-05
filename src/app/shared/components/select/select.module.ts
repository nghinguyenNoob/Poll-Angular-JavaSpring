import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    ScrollingModule
  ],
  exports: [
    SelectComponent
  ],
})
export class SelectModule {}
