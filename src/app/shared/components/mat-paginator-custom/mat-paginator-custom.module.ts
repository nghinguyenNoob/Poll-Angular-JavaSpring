import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorCustomComponent } from './mat-paginator-custom.component';
import { PaginationDirective } from './pagination.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [PaginationDirective, MatPaginatorCustomComponent],
  imports: [
    // BrowserModule,
    MatPaginatorModule,
    MatFormFieldModule,
    // BrowserAnimationsModule,
  ],
  providers: [],
  exports: [PaginationDirective,MatPaginatorCustomComponent],
})
export class MatPaginatorCustomModule {}
