import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, debounceTime, switchMap, skip, takeUntil} from 'rxjs/operators';
import { EMPTY, of, asyncScheduler} from 'rxjs';
import {ArtistsApiActions, SearchArtistPageActions} from "../actions";
import {ApiDataService} from "../../core/services";
import {ArtistSearchResult} from "../models";


@Injectable()
export class ArtistsEffects {

  search$ = createEffect(
    () =>
      ({ debounce = 800, scheduler = asyncScheduler } = {}) =>
        this.actions$.pipe(
          ofType(SearchArtistPageActions.searchArtists),
          debounceTime(debounce, scheduler),
          switchMap(({ query }) => {
            if (query === '') {
              return EMPTY;
            }

            const nextSearch$ = this.actions$.pipe(
              ofType(SearchArtistPageActions.searchArtists),
              skip(1)
            );

            return this.apiDataService.searchArtists(query).pipe(
              takeUntil(nextSearch$),
              map((resp: any) =>{
                console.log(resp.data)
                const data = resp.data
                return   ArtistsApiActions.searchSuccess({ data })}),
              catchError((err) =>
                of(ArtistsApiActions.searchFailure({ errorMsg: err.message }))
              )
            );
          })
        )
  );


  constructor(
    private actions$: Actions,
    private apiDataService: ApiDataService
  ) {}
}
