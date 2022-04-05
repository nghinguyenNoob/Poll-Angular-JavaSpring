import { bootstrapsEnvironment } from './bootstraps/bootstrap';
import { AppStoreModule } from './store/app-store.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { AddHeaderInterceptor } from './modules/login-page/token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule,
    MainLayoutModule,
    HttpClientModule,
    LoginPageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [bootstrapsEnvironment.app],
})
export class AppModule {}
