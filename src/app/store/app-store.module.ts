import { ScheduleEffects } from './effects/schedule.effect';
import { Pagination } from './models/pagination.i';
import { NotificationEffect } from './effects/notification.effect';
import { environment } from './../../environments/environment';
import { appReducer } from './app-state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoEffect } from './effects/todo.effect';
import { SnackbarEffects } from './effects/snackbar.effects';
import { clearState } from './reducers/login.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, { metaReducers: [clearState] }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      TodoEffect,
      NotificationEffect,
      ScheduleEffects,
      SnackbarEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class AppStoreModule {}
