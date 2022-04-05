import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { PopupModule } from '../shared/components/pop-up/pop-up.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PopupModule,
    MainLayoutRoutingModule,
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
