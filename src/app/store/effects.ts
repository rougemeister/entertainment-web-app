import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as MediaActions from './actions';
import { DataService } from '../services/data.service';

@Injectable()
export class MediaEffects {
  loadMediaItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.loadMediaItems),
      switchMap(() =>
        this.dataService.getAllMediaItems().pipe(
          map(mediaItems => MediaActions.loadMediaItemsSuccess({ mediaItems })),
          catchError(error => of(MediaActions.loadMediaItemsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}