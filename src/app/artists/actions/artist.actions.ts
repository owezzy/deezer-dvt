import {createAction, props} from '@ngrx/store';
import {Artist, ArtistSearchResult} from "../models";

export const loadArtist = createAction(
  '[Artists Exists Guard] Load Artist',
  props<{ artist: ArtistSearchResult }>()
);
export const loadNextPageUrl = createAction(
  '[Next Page] Load Next Page URL',
  props<{ url: string }>()
);
