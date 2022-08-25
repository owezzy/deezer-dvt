import { createAction, props } from '@ngrx/store';
import {Artist} from "../models";



export const addArtist = createAction(
  '[Selected Artist Page] Add Artist',
  props<{ artist: Artist }>()
);


export const removeArtist = createAction(
  '[Selected Artist Page] Remove Artist',
  props<{ artist: Artist }>()
);
