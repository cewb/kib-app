import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  phUsersUrl = "https://jsonplaceholder.typicode.com/users";
  dbUsersUrl = "http://localhost:8081/users";
  pushPhUsersUrl = "http://localhost:8081/push";
  delAllUsersUrl = "http://localhost:8081/users_delete_all";

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPhUsers(): Observable<JSON[]> {
    return this.http.get<JSON[]>(this.phUsersUrl, this.httpOptions);
  }

  getDbUsers(): Observable<JSON[]> {
    return this.http.get<JSON[]>(this.dbUsersUrl, this.httpOptions);
  }

  postPhUsers(body: string): Observable<any> {
    return this.http.post<any>(this.pushPhUsersUrl, body, this.httpOptions);
  }

  deleteAllDbUsers() {
    return this.http.get(this.delAllUsersUrl, this.httpOptions);
  }

}
