import { createAction, props } from '@ngrx/store';
import { MediaItem } from '../model/model';

export const loadMediaItems = createAction('[Media] Load Items');
export const loadMediaItemsSuccess = createAction(
  '[Media] Load Items Success',
  props<{ mediaItems: MediaItem[] }>()
);
export const loadMediaItemsFailure = createAction(
  '[Media] Load Items Failure',
  props<{ error: any }>()
);
export const setCategory = createAction(
  '[Media] Set Category',
  props<{ category: string }>()
);
