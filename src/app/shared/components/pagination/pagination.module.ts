import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
