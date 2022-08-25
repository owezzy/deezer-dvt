import * as fromArtistsSearch from './search-artists.reducer';
import * as fromArtists from './artists.reducer';
import {artistsFeatureKey} from './artists.reducer';
import * as fromCollection from './collection.reducer';
import * as fromRoot from '../../Store';
import {Action, combineReducers, createFeatureSelector, createSelector} from "@ngrx/store";
import {Artist, ArtistSearchResult} from "../models";

export const artistFeatureStateKey = 'artists-state'

export interface ArtistsState {
  [fromArtistsSearch.searchFeatureKey]: fromArtistsSearch.State;
  [fromArtists.artistsFeatureKey]: fromArtists.State;
  [fromCollection.collectionFeatureKey]: fromCollection.State;
}

export interface State extends fromRoot.State {
  [artistFeatureStateKey]: ArtistsState
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: ArtistsState | undefined, action: Action) {
  return combineReducers({
    [fromArtistsSearch.searchFeatureKey]: fromArtistsSearch.reducer,
    [fromArtists.artistsFeatureKey]: fromArtists.reducer,
    [fromCollection.collectionFeatureKey]: fromCollection.reducer,
  })(state, action);
}

export const selectArtistsState = createFeatureSelector<ArtistsState>(artistFeatureStateKey)

export const selectArtistEntitiesState = createSelector(
  selectArtistsState,
  (state) => state[artistsFeatureKey]
);

export const selectSelectedArtistId = createSelector(
  selectArtistEntitiesState,
  fromArtists.selectId
);

export const {
  selectIds: selectArtistIds,
  selectEntities: selectArtistEntities,
  selectAll: selectAllArtists,
  selectTotal: selectTotalArtists,
} = fromArtists.adapter.getSelectors(selectArtistEntitiesState);

export const selectSelectedArtist = createSelector(
  selectArtistEntities,
  selectSelectedArtistId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const selectSearchState = createSelector(
  selectArtistsState,
  (state) => state.search
);

export const selectSearchArtistIds = createSelector(
  selectSearchState,
  fromArtistsSearch.getIds
);
export const selectSearchQuery = createSelector(
  selectSearchState,
  fromArtistsSearch.getQuery
);
export const selectSearchLoading = createSelector(
  selectSearchState,
  fromArtistsSearch.getLoading
);
export const selectSearchError = createSelector(
  selectSearchState,
  fromArtistsSearch.getError
);

export const selectSearchResults = createSelector(
  selectArtistEntities,
  selectSearchArtistIds,
  (books, searchIds) => {
    return searchIds
      .map((id) => books[id])
      .filter((artist): artist is ArtistSearchResult => artist != null);
  }
);

export const selectCollectionState = createSelector(
  selectArtistsState,
  (state) => state.collection
);

export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  fromCollection.getLoaded
);
export const getCollectionLoading = createSelector(
  selectCollectionState,
  fromCollection.getLoading
);
export const selectCollectionArtistIds = createSelector(
  selectCollectionState,
  fromCollection.getIds
);

export const selectArtistCollection = createSelector(
  selectArtistEntities,
  selectCollectionArtistIds,
  (entities, ids) => {
    return ids
      .map((id) => entities[id])
      .filter((artist): artist is ArtistSearchResult => artist != null);
  }
);

export const isSelectedArtistInCollection = createSelector(
  selectCollectionArtistIds,
  selectSelectedArtistId,
  (ids, selected) => {
    return !!selected && ids.indexOf(selected) > -1;
  }
);

