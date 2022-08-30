import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, debounceTime, switchMap, skip, takeUntil, tap} from 'rxjs/operators';
import {EMPTY, of, asyncScheduler} from 'rxjs';
import { ArtistsApiActions, SearchArtistPageActions} from "../actions";
import {ApiDataService} from "../../core/services";
import {ActivatedRoute, Router} from "@angular/router";


@Injectable()
export class ArtistsEffects {

  search$ = createEffect(
    () =>
      ({debounce = 800, scheduler = asyncScheduler} = {}) =>
        this.actions$.pipe(
          ofType(SearchArtistPageActions.searchArtists),
          debounceTime(debounce, scheduler),
          switchMap(({query, resourceName}) => {
            if (query === '') {
              return EMPTY;
            }

            const nextSearch$ = this.actions$.pipe(
              ofType(SearchArtistPageActions.searchArtists),
              skip(1)
            );

            return this.apiDataService.searchArtists(query).pipe(
              takeUntil(nextSearch$),
              map((resp: any) => {
                console.log(resp.data)
                const data = resp.data
                const url = resp.next
                return ArtistsApiActions.searchSuccess({data})
              }),
              catchError((err) =>
                of(ArtistsApiActions.searchFailure({errorMsg: err.message}))
              ),
              tap(() => {
                return this.router
                  .navigate(['/artists'], {
                    relativeTo: this.route,
                    queryParams: {
                      q: query,

                    },
                    queryParamsHandling: 'merge',
                  })
                  .then();

              })
            );
          })
        )
  );


  constructor(
    private actions$: Actions,
    private apiDataService: ApiDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
}
