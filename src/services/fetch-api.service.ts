import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  private newapi='https://api.themoviedb.org/3/discover/movie?api_key=e1ba13ff124d0f98a9019805d19ce7a0';

  constructor(private http:HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get(this.newapi);
  }


  private secondapi='https://api.themoviedb.org/3/discover/tv?api_key=e1ba13ff124d0f98a9019805d19ce7a0';

  getWebSeries():Observable<any>{
    return this.http.get(this.secondapi)
  }
}

