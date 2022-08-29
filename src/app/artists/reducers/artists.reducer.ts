import { Action, createReducer, on } from '@ngrx/store';
import * as ArtistsActions from '../actions/artist.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Artist, ArtistSearchResult} from "../models";
import {ArtistActions, ArtistsApiActions, CollectionAPIActions, ViewArtistPageActions} from "../actions";

export const artistsFeatureKey = 'artists';

export interface State extends EntityState<ArtistSearchResult> {
  selectedArtistId: string | null
}

export const adapter: EntityAdapter<ArtistSearchResult> = createEntityAdapter<ArtistSearchResult>({
  selectId: (artist: ArtistSearchResult) => artist.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState( {
  selectedArtistId: null
});

export const reducer = createReducer(
  initialState,

  on(ArtistsApiActions.searchSuccess,
    (state, {data}) => adapter.addMany(data, state)),

  // on(CollectionAPIActions.loadArtistsSuccess,
  //   (state, {data}) => adapter.addMany(data, state)),

  on(ArtistActions.loadArtist,
    (state, {artist}) => adapter.addOne(artist, state)),

  on(ViewArtistPageActions.selectArtist,
    (state, {id}) => ({...state, selectedArtistId: id}))



);

export const selectId = (state: State) => state.selectedArtistId;
