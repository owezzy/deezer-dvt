import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import {ApiDataService} from "../../core/services";
import * as fromArtists from '../../artists/reducers'
import {ArtistActions} from "../actions";

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable({
  providedIn: 'root',
})
export class ArtistExistsGuard implements CanActivate {
  constructor(
    private store: Store,
    private apiDataService: ApiDataService,
    private router: Router
  ) {}

  /**
   * This method creates an observable that waits for the `loaded` property
   * of the collection state to turn `true`, emitting one time once loading
   * has finished.
   */
  waitForCollectionToLoad(): Observable<boolean> {
    return this.store.select(fromArtists.selectCollectionLoaded).pipe(
      filter((loaded) => loaded),
      take(1)
    );
  }

  /**
   * This method checks if a book with the given ID is already registered
   * in the Store
   */
  hasArtistInStore(id: string): Observable<boolean> {
    return this.store.select(fromArtists.selectArtistEntities).pipe(
      map((entities) => !!entities[id]),
      take(1)
    );
  }

  /**
   * This method loads a book with the given ID from the API and caches
   * it in the store, returning `true` or `false` if it was found.
   */
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

  /**
   * `hasBook` composes `hasBookInStore` and `hasBookInApi`. It first checks
   * if the book is in store, and if not it then checks if it is in the
   * API.
   */
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

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the collection to load, then it checks if we need
   * to request a book from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    // return this.waitForCollectionToLoad()!!.pipe(
    //   switchMap(() => this.hasArtist(route.params['id']))
    // );
    return this.hasArtist(route.params['id'])
  }
}
