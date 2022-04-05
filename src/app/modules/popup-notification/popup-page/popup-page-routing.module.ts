import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupPageComponent } from './popup-page.component';

const routes: Routes = [
  {
    path: '',
    component: PopupPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupPageRouter {}
