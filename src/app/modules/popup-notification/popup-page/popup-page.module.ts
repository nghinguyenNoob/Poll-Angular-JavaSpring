import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupPageComponent } from './popup-page.component';
import { PopupModule } from '../../../shared/components/pop-up/pop-up.module';
import { PopupPageRouter } from './popup-page-routing.module';


@NgModule({
  declarations: [
    PopupPageComponent
  ],
  imports: [
    CommonModule,
    PopupModule,
    PopupPageRouter
  ],
  exports: [PopupPageComponent]
})
export class PopupPageModule { }
