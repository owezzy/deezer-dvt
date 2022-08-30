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

  getHttpParams = (data: Map<string, string>): HttpParams => {
    if (data === undefined) {
      return new HttpParams();
    }

    let httpParams: HttpParams = new HttpParams();
    data.forEach((value: string, key: string) => {
      httpParams = httpParams.append(key, value);
    });
    return httpParams;
  };

  searchResource(resourceName: string, params:Map<string, string>): Observable<ArtistSearchResult> {
    // const searchArtist = this.urlCors+environment.Deezer_API
    const searchArtist = environment.Deezer_API
    return this.httpClient.get<ArtistSearchResult>(`${searchArtist}/search/${resourceName}`,{
      params: this.getHttpParams(params)
    })
  }

  searchArtists(name: string): Observable<ArtistSearchResult> {
    const searchArtist = this.urlCors+environment.Deezer_API
    // const searchArtist = environment.Deezer_API
    return this.httpClient.get<ArtistSearchResult>(`${searchArtist}/search/artist?q=${name}`)
  }

  searchMusic(str: string, type = 'artist'): Observable<any[]> {
    const searchUrl = this.urlCors+`https://api.deezer.com/search?q=${str}&offset=0&limit=10&type=${type}`;
    return this.httpClient.get(searchUrl).pipe(map((res: any) => <any[]>res.data));
  }

  getArtist(id: string): Observable<any> {
    const artistUrl = `https://api.deezer.com/artist/${id}`;
    return this.httpClient.get(artistUrl).pipe(map(res => <any> res));
  }

  getArtistAlbums(id: string):Observable<Album[]>{
    const albumsUrl = `https://api.deezer.com/artist/${id}/albums`
    return this.httpClient.get<Album[]>(`${albumsUrl}`)
  }
  getArtistTopTracks(id: string):Observable<ArtistTopTrack[]>{
    const artistTopTracks = `https://api.deezer.com/artist/${id}/top?index=0&limit=5`
    return this.httpClient.get<{data: ArtistTopTrack[]}>(`${artistTopTracks}`).pipe(map((res) => <any>res.data))

  }
}
