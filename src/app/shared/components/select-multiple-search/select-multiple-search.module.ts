import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { SelectMultipleSearchComponent } from './select-multiple-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectMultipleSearchComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule,
  ],
  exports: [SelectMultipleSearchComponent]
})
export class SelectMultipleSearchModule { }
