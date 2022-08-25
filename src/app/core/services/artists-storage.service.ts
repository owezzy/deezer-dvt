import {Inject, Injectable, InjectionToken} from '@angular/core';
import {map, Observable, of, throwError} from "rxjs";
import {tap} from "rxjs/operators";

export function storageFactory() {
  return typeof window === undefined || typeof localStorage === undefined
    ? null
    : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken(
  'example-app-local-storage',
  { factory: storageFactory }
);
@Injectable({
  providedIn: 'root'
})
export class ArtistsStorageService {

  private collectionKey = 'deezer-music-app';

  supported(): Observable<boolean> {
    return this.storage !== null
      ? of(true)
      : throwError(() => 'Local Storage Not Supported');
  }

  getCollection(): Observable<any[]> {
    return this.supported().pipe(
      map((_) => this.storage.getItem(this.collectionKey)),
      map((value: string | null) => (value ? JSON.parse(value) : []))
    );
  }

  addToCollection(records: any[]): Observable<any[]> {
    return this.getCollection().pipe(
      map((value: any[]) => [...value, ...records]),
      tap((value: any[]) =>
        this.storage.setItem(this.collectionKey, JSON.stringify(value))
      )
    );
  }

  removeFromCollection(ids: Array<string>): Observable<any[]> {
    return this.getCollection().pipe(
      map((value: any[]) => value.filter((item) => !ids.includes(item.id))),
      tap((value: any[]) =>
        this.storage.setItem(this.collectionKey, JSON.stringify(value))
      )
    );
  }

  deleteCollection(): Observable<boolean> {
    return this.supported().pipe(
      tap(() => this.storage.removeItem(this.collectionKey))
    );
  }

  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}

}
