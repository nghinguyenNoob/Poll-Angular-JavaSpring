import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    
  ],
  exports: [
     ButtonComponent,
  ],
})
export class ButtonModule {}
