import { NgScrollbarModule } from 'ngx-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CalendarComponent } from './calendar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import {
  CalendarEventTitleFormatter,
  CalendarModule as AngularCalendarModule,
  DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';
import { BottomActionComponent } from './bottom-action/bottom-action.component';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [CalendarComponent, BottomActionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatExpansionModule,
    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatBadgeModule,
    NgScrollbarModule,
    MatBottomSheetModule,
    RouterModule,
  ],
  exports: [CalendarComponent],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter,
    },
  ],
})
export class CalendarModule {}
