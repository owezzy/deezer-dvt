import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Album, ArtistSearchResult, ArtistTopTrack} from "../../artists/models";

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  public params$ = new BehaviorSubject<Map<string, string>>(null);

  urlCors = "https://cors-anywhere.herokuapp.com/";

  constructor(
    private httpClient: HttpClient
  ) {
  }


  searchArtists(name: string): Observable<ArtistSearchResult> {
    const searchArtist = this.urlCors+environment.Deezer_API
    // const searchArtist = environment.Deezer_API
    // const searchArtist = environment.Deezer_API_LOCAL
    const options = new HttpParams()
      .set('q', name)
    return this.httpClient.get<ArtistSearchResult>(`${searchArtist}/search/artist`,{
      params: options
    })
  }

  getArtist(id: string): Observable<any> {
    const artistUrl = this.urlCors+environment.Deezer_API;
    // const artistUrl = environment.Deezer_API;
    return this.httpClient.get(`${artistUrl}/artist/${id}`).pipe(map(res => <any> res));
  }

  getArtistAlbums(id: string):Observable<Album[]>{
    const albumsUrl = this.urlCors+environment.Deezer_API
    // const albumsUrl = environment.Deezer_API
    // const albumsUrl = environment.Deezer_API_LOCAL
    return this.httpClient.get<Album[]>(`${albumsUrl}/artist/${id}/albums`)
  }

  getArtistTopTracks(id: string):Observable<ArtistTopTrack[]>{
    const artistTopTracks = this.urlCors+environment.Deezer_API
    // const artistTopTracks = environment.Deezer_API
    // const artistTopTracks = environment.Deezer_API_LOCAL
    return this.httpClient.get<{data: ArtistTopTrack[]}>(`${artistTopTracks}/artist/${id}/top?index=0&limit=5`)
      .pipe(map((res) => <any>res.data))

  }
}
