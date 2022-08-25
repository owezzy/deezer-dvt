import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArtists from '../reducers/artists.reducer';

export const selectArtistsState = createFeatureSelector<fromArtists.State>(
  fromArtists.artistsFeatureKey
);
