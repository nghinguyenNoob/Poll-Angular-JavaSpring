import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  CheckEquipmentSuccess,
  ESchedule,
  ScheduleAddFail,
  ScheduleAddSuccess,
} from '../../store/actions/schedule.action';
import {
  AddSchedule,
  CheckFreeTimeParams,
} from '../../store/models/add-schedule.i';
import { Category } from '../../store/models/category.i';
import { LabelledValue } from '../../store/models/labelvalue.i';
import { UserService } from '../../store/services/user.service';
import { StoreFacade } from '../../store/store-facades/schedule.store-facade';
@Component({
  selector: 'brc-add-schedule-page',
  templateUrl: './add-schedule-page.component.html',
  styleUrls: ['./add-schedule-page.component.scss'],
})
export class AddSchedulePageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public selectTypeSchedule: LabelledValue<string>[] = selectTypeScheduleFake;
  public selectImportant: LabelledValue<string>[] = selectImportantFake;
  public selectWeekly: LabelledValue<string>[] = selectWeeklyFake;
  public selectMonthly: LabelledValue<string>[] = selectMonthlyFake;
  public selectUserIds: Category[] = [];
  public selectEquipment: Category[] = selectEquipmentFake;
  public data: AddSchedule;
  constructor(
    private storeFacade: StoreFacade,
    private actions$: Actions,
    private router: Router,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data) => {
      if (data !== undefined && data != []) {
        this.selectUserIds = data.map((item) => {
          let category: Category = {
            categoryId: item.id,
            categoryName: item.fullName,
          };
          return category;
        });
      }
    });
    this.actions$
      .pipe(
        ofType<ScheduleAddSuccess>(ESchedule.ADD_SUCCESS),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.router.navigate(['/schedule']);
        this.openSnackBar('Add Schedule Success !!!', 'Success!!');
      });
    this.actions$
      .pipe(
        ofType<ScheduleAddFail>(ESchedule.ADD_FAIL),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.openSnackBar('Add Schedule Fail !!!', 'Failed!!');
      });
    this.actions$
      .pipe(
        ofType<CheckEquipmentSuccess>(ESchedule.CHECK_EQUIPMENT_SUCCESS),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((res) => {
        let notification: string = '';
        if (res.payload.list.count == 0) {
          notification = 'OK';
          this.openSnackBar('Check Equipment', notification);
        } else {
          for (let i = 0; i < res.payload.list.records.length; i++) {
            for (let j = 0; j < selectEquipmentFake.length; j++) {
              if (
                res.payload.list.records[i].equipment_id ===
                selectEquipmentFake[j].categoryId
              ) {
                notification += selectEquipmentFake[j].categoryName + ' ';
                break;
              }
            }
          }
          this.openSnackBar('Check Equipment', notification);
        }
      });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  AddSchedule(data: AddSchedule) {
    this.data = data;
    this.storeFacade.addSchedule(this.data);
  }
  CheckFreeTimeEquipment(data: CheckFreeTimeParams) {
    console.log(data);
    this.storeFacade.checkEquipment(data);
  }
  CancelSchedule(data: string) {
    this.router.navigate([data]);
  }
}
const selectTypeScheduleFake: LabelledValue<string>[] = [
  {
    label: 'Meeting',
    value: '1',
  },
  {
    label: 'Event',
    value: '2',
  },
];
const selectImportantFake: LabelledValue<string>[] = [
  {
    label: 'High',
    value: 'Hight',
  },
  {
    label: 'Medium',
    value: 'Medium',
  },
  {
    label: 'Normal',
    value: 'Normal',
  },
];

const selectWeeklyFake: LabelledValue<string>[] = [
  { value: '1', label: 'Monday' },
  { value: '2', label: 'Tuesday' },
  { value: '3', label: 'Wednesday' },
  { value: '4', label: 'Thursday' },
  { value: '5', label: 'Friday' },
  { value: '6', label: 'Saturday' },
  { value: '0', label: 'Sunday' },
];

let selectMonthlyFake: LabelledValue<string>[] = [];

const nth = (d) => {
  if (d > 3 && d < 21) {
    return 'th';
  }
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
const dates = [...Array(31).keys()].slice(1).map((i) => {
  selectMonthlyFake.push({
    label: `${i}${nth(i)}`,
    value: `${i}`,
  });
});

selectMonthlyFake.push({
  label: `last of month`,
  value: `lastOfMonth`,
});

const selectEquipmentFake: Category[] = [
  {
    categoryName: 'Laptop',
    categoryId: 1,
  },
  {
    categoryName: 'Micro',
    categoryId: 2,
  },
  {
    categoryName: 'Projector ',
    categoryId: 3,
  },
  {
    categoryName: 'TV',
    categoryId: 4,
  },
];
