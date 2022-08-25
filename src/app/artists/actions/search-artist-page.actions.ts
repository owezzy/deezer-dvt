import { createAction, props } from '@ngrx/store';

export const searchArtists = createAction(
  '[Search Artist Page] Search Artists',
  props<{ query: string }>()
);
