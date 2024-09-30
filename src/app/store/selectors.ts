import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MediaState } from './reducers';

export const selectMediaState = createFeatureSelector<MediaState>('media');

export const selectAllMediaItems = createSelector(
  selectMediaState,
  state => state.items
);

export const selectCategory = createSelector(
  selectMediaState,
  state => state.category
);

export const selectFilteredMediaItems = createSelector(
  selectAllMediaItems,
  selectCategory,
  (items, category) => {
    if (category === 'All') return items;
    return items.filter(item => item.category === category);
  }
);

export const selectTrendingItems = createSelector(
  selectAllMediaItems,
  items => items.filter(item => item.isTrending)
);
