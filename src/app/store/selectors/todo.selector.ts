import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { TodoState } from '../reducers/todo.reducer';

export const todoFeature = (state : AppState) => state.todo;

export const getTodo = createSelector(todoFeature,(state :TodoState) => state);
