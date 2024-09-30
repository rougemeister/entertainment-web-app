import { createReducer, on } from '@ngrx/store';
import * as MediaActions from './actions';
import { MediaItem } from '../model/model';

export interface MediaState {
  items: MediaItem[];
  category: string;
  loading: boolean;
  error: any;
}

export const initialState: MediaState = {
  items: [],
  category: 'All',
  loading: false,
  error: null
};

export const mediaReducer = createReducer(
  initialState,
  on(MediaActions.loadMediaItems, state => ({ ...state, loading: true })),
  on(MediaActions.loadMediaItemsSuccess, (state, { mediaItems }) => ({
    ...state,
    items: mediaItems,
    loading: false,
    error: null
  })),
  on(MediaActions.loadMediaItemsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(MediaActions.setCategory, (state, { category }) => ({
    ...state,
    category,
  }))
);