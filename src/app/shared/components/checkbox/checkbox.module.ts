import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from './../../material-custom/material-custom.module';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { CheckboxComponent } from './item/checkbox.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';

@NgModule({
  declarations: [CheckboxComponent, CheckboxGroupComponent],
  imports: [CommonModule, MaterialCustomModule, FormsModule],
  exports: [CheckboxGroupComponent, CheckboxComponent],
})
export class CheckboxModule {}
