import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { createAction, props } from '@ngrx/store';

export const OpenSnackbars = createAction(
  '[Snackbar] Open Snackbars',
  props<{
    config: {
      message: string;
      action?: string;
      config?: MatSnackBarConfig;
    };
  }>()
);

export const CloseSnackbars = createAction('[Snackbar] Close Snackbars');

export const OpenSnackbarsFromEffect = createAction(
  '[Snackbar] Open Snackbars From Effect',
  props<{
    config: {
      message: string;
      action?: string;
      config?: MatSnackBarConfig;
    };
  }>()
);
