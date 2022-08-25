import { createAction, props } from '@ngrx/store';

export const selectArtist = createAction(
  '[View Artist Page] Select Artist',
  props<{ id: string }>()
);
