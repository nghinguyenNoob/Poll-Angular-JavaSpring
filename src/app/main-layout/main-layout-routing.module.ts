import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { MainLayoutComponent } from './main-layout.component';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'todo',
        loadChildren: () =>
          import('../modules/todo-list-page/todo-list-page.module').then(
            (m) => m.TodoListPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'todo/add',
        loadChildren: () =>
          import('../modules/add-todo-page/add-todo-page.module').then(
            (m) => m.AddTodoPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'todo/detail',
        loadChildren: () =>
          import(
            '../modules/detail-todo-page/detail-todo-page.module'
          ).then((m) => m.TodoDetailPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'popup',
        loadChildren: () =>
          import(
            '../modules/popup-notification/popup-page/popup-page.module'
          ).then((m) => m.PopupPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'notification',
        loadChildren: () =>
          import(
            '../modules/notification-page/notification-page.module'
          ).then((m) => m.NotificationPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('../modules/schedule-page/schedule-page.module').then(
            (m) => m.SchedulePageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'schedule/add',
        loadChildren: () =>
          import(
            '../modules/add-schedule-page/add-schedule-page.module'
          ).then((m) => m.AddSchedulePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'schedule/detail',
        loadChildren: () =>
          import(
            '../modules/schedule-detail-page/schedule-detail-page.module'
          ).then((m) => m.ScheduleDetailPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'schedule/scheduleList',
        loadChildren: () =>
          import(
            '../modules/schedule-list-page/schedule-list-page.module'
          ).then((m) => m.ScheduleListPageModule),
      },
      {
        path: 'excel',
        loadChildren: () =>
          import(
            '../modules/excel-list-page/excel-list-page.module'
          ).then((m) => m.ExcelListPageModule),
      },
      {
        path: 'excelTemplateDetail',
        loadChildren: () =>
          import(
            '../modules/excel-template-detail-page/excel-template-detail-page.module'
          ).then((m) => m.ExcelTemplateDetailPageModule),
      },
      {
        path: 'poll',
        loadChildren: () =>
          import(
            '../modules/poll-list-page/poll-list-page.module'
          ).then((m) => m.PollListPageModule),
      },
      {
        path: 'poll/add',
        loadChildren: () =>
          import(
            '../modules/add-poll-page/add-poll-page.module'
          ).then((m) => m.AddPollPageModule),
      },
      {
        path: 'poll/poll-vote',
        loadChildren: () =>
          import(
            '../modules/poll-main-page/poll-main-page.module'
          ).then((m) => m.PollMainPageModule),
      },
      {
        path: 'poll/detail',
        loadChildren: () =>
          import(
            '../modules/poll-detail-page/poll-detail-page.module'
          ).then((m) => m.PollDetailPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
