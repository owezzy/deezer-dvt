import {Injectable} from "@angular/core";
import {defer, map, mergeMap, of} from "rxjs";
import {catchError, switchMap} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CollectionAPIActions, CollectionPageActions, SelectedArtistPageActions} from "../actions";
import { ArtistSearchResult} from "../models";
import {ArtistsStorageService} from "../../core/services";

@Injectable()
export class CollectionEffects {

  checkStorageSupport$ = createEffect(
    () => defer(() => this.storageService.supported()),
    { dispatch: false }
  );

  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionPageActions.enter),
      switchMap(() =>
        this.storageService.getCollection().pipe(
          map((artists: ArtistSearchResult[]) =>
            CollectionAPIActions.loadArtistsSuccess({ artists })
          ),
          catchError((error) =>
            of(CollectionAPIActions.loadArtistsFailure({ error }))
          )
        )
      )
    )
  );

  addArtistToCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SelectedArtistPageActions.addArtist),
      mergeMap(({ artist }) =>
        this.storageService.addToCollection([artist]).pipe(
          map(() => CollectionAPIActions.addArtistSuccess({ artist })),
          catchError(() => of(CollectionAPIActions.removeArtistFailure({ artist })))
        )
      )
    )
  );

  removeArtistFromCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SelectedArtistPageActions.removeArtist),
      mergeMap(({ artist }) =>
        this.storageService.removeFromCollection([artist.id]).pipe(
          map(() => CollectionAPIActions.removeArtistSuccess({ artist })),
          catchError(() => of(CollectionAPIActions.removeArtistFailure({ artist })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private storageService: ArtistsStorageService
  ) {
  }
}
