import {createAction, props} from '@ngrx/store';
import {Artist, ArtistSearchResult} from "../models";

export const loadArtist = createAction(
  '[Artists Exists Guard] Load Artist',
  props<{ artist: ArtistSearchResult }>()
);
