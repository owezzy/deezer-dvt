import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  urlCors = "https://cors-anywhere.herokuapp.com/";

  constructor(
    private httpClient: HttpClient
  ) {
  }

  searchArtists(name: string): Observable<any> {
    const searchArtist = environment.Deezer_API
    return this.httpClient.get(`${searchArtist}/search?q=${name}`, {
      withCredentials: true
    })
  }

  searchMusic(str: string, type = 'artist'): Observable<any[]> {
    const searchUrl = this.urlCors+`https://api.deezer.com/search?q=${str}&offset=0&limit=10&type=${type}`;
    return this.httpClient.get(searchUrl).pipe(map((res: any) => <any[]>res.data));
  }

  getArtist(id: string): Observable<any> {
    const artistUrl = this.urlCors + `https://api.deezer.com/artist/${id}`;
    return this.httpClient.get(artistUrl).pipe(map(res => <any> res));
  }
}
