// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlTodo: 'http://192.168.8.22:3000/todo',
  urlCategory: 'http://192.168.8.22:3000/category',
  urlNotification: 'http://192.168.8.22:3000/notification',
  urlEvent: 'http://192.168.8.22:3000/event',
  urlSchedule: 'http://192.168.8.22:3000/schedule',
  urlCountNotification: 'http://192.168.8.22:3000/notification/total-unread',
  urlEquipment: 'http://192.168.8.22:3000/equipment',
  urlLogin: 'http://192.168.8.22:3000/auth',
  snackbarDelayTime: 700000,
  urlDetailTodo: "http://192.168.8.22:3000/todo",
  urlSocket : "192.168.4.224:3001",
  urlImport: "http://192.168.4.29:8080/api/exceltemplate",
  urlExcelTemplateDetail : "http://192.168.4.29:8080/api/exceltemplatedetail",
  urlUser : "http://192.168.8.22:3000/user",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
