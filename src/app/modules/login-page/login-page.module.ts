import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginRouter } from './login-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRouter,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
