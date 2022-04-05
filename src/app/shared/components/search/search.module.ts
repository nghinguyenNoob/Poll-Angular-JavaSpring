import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
