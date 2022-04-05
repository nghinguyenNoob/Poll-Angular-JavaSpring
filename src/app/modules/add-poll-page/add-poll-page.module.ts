import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPollPageComponent } from './add-poll-page.component';
import { AddPollModule } from '../../shared/components/add-poll/add-poll.module';
import { AddPollPageRouter } from './add-poll-page-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [AddPollPageComponent],
  imports: [CommonModule ,AddPollModule, AddPollPageRouter,MatSnackBarModule],
  exports: [AddPollPageComponent],
})
export class AddPollPageModule {}
