/**
 * Add Artist to Collection Actions
 */
import {createAction, props} from "@ngrx/store";
import {Artist, ArtistSearchResult} from "../models";

export const addArtistSuccess = createAction(
  '[Collection/API] Add Artist Success',
  props<{ artist: Artist }>()
);

export const addArtistFailure = createAction(
  '[Collection/API] Add Artist Failure',
  props<{ artist: Artist }>()
);

/**
 * Remove Artist from Collection Actions
 */
export const removeArtistSuccess = createAction(
  '[Collection/API] Remove Artist Success',
  props<{ artist: Artist }>()
);

export const removeArtistFailure = createAction(
  '[Collection/API] Remove Artist Failure',
  props<{ artist: Artist }>()
);

/**
 * Load Collection Actions
 */
export const loadArtistsSuccess = createAction(
  '[Collection/API] Load Artists Success',
  props<{ artists: Artist[] }>()
);

export const loadArtistsFailure = createAction(
  '[Collection/API] Load Artists Failure',
  props<{ error: any }>()
);
