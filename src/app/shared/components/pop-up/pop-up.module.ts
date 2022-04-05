import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { PopUpComponent } from './pop-up.component';

@NgModule({
  declarations: [PopUpComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    MaterialCustomModule,
  ],
  exports: [
    PopUpComponent
  ],
})
export class PopupModule {}
