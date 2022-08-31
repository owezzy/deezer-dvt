import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import {ApiDataService} from "../../core/services";
import * as fromArtists from '../../artists/reducers'
import {ArtistActions} from "../actions";


@Injectable({
  providedIn: 'root',
})
export class ArtistExistsGuard implements CanActivate {
  constructor(
    private store: Store,
    private apiDataService: ApiDataService,
    private router: Router
  ) {}


  waitForCollectionToLoad(): Observable<boolean> {
    return this.store.select(fromArtists.selectCollectionLoaded).pipe(
      filter((loaded) => loaded),
      take(1)
    );
  }


  hasArtistInStore(id: string): Observable<boolean> {
    return this.store.select(fromArtists.selectArtistEntities).pipe(
      map((entities) => !!entities[id]),
      take(1)
    );
  }

  hasArtistInApi(id: string): Observable<boolean> {
    return this.apiDataService.getArtist(id).pipe(
      map((ArtistEntity) => ArtistActions.loadArtist({ artist: ArtistEntity })),
      tap((action) => this.store.dispatch(action)),
      map((book) => !!book),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }


  hasArtist(id: string): Observable<boolean> {
    return this.hasArtistInStore(id).pipe(
      switchMap((inStore) => {
        if (inStore) {
          return of(inStore);
        }
        return this.hasArtistInApi(id);
      })
    );
  }


  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasArtist(route.params['id'])
  }
}
