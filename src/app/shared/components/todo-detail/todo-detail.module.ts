import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { TextareaModule } from '../textarea/textarea.module';
import { TodoDetailComponent } from './todo-detail.component';


@NgModule({
  declarations: [
    TodoDetailComponent,
    ],
  imports: [
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    TextareaModule,
  ],
  exports: [
    TodoDetailComponent
  ],
})
export class TodoDetailModule {}
