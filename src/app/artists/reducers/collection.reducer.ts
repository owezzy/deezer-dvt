import {ArtistsApiActions, CollectionAPIActions, CollectionPageActions, SelectedArtistPageActions} from "../actions";
import {createReducer, on} from "@ngrx/store";

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};
export const reducer = createReducer(
  initialState,
  on(CollectionPageActions.enter, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    // ArtistsApiActions.searchSuccess,
    CollectionAPIActions.loadArtistsSuccess,
    (_state, { artists }) => ({
    loaded: true,
    loading: false,
    ids: artists.map((artist) => artist.id),
  })),

  on(
    SelectedArtistPageActions.addArtist,
    CollectionAPIActions.removeArtistFailure,
    (state, { artist }) => {
      if (state.ids.indexOf(artist.id) > -1) {
        return state;
      }
      return {
        ...state,
        ids: [...state.ids, artist.id],
      };
    }
  ),
  on(
    SelectedArtistPageActions.removeArtist,
    CollectionAPIActions.addArtistFailure,
    (state, { artist }) => ({
      ...state,
      ids: state.ids.filter((id) => id !== artist.id),
    })
  )
);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
