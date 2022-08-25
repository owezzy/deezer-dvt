import {createAction, props} from "@ngrx/store";
import {ArtistSearchResult} from "../models";

export const searchSuccess = createAction(
  '[Artists/API] Search Success',
  props<{ data: ArtistSearchResult[] }>()
);

export const searchFailure = createAction(
  '[Artists/API] Search Failure',
  props<{ errorMsg: string }>()
);
