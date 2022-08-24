import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(
  private httpClient: HttpClient

  ) { }

  searchArtists(name: string):Observable<any>{

    return this.httpClient.get(`${environment.Deezer_API}/search?q=${name}`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*/*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }),
      withCredentials: true
      // params: getHttpParams(params),

      }
    )

  }
}
