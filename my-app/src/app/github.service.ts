import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  updateUser(user: string) {
    return this.http.get<any>(`https://api.github.com/users/${user}`);
  }

  /*
   Takes in a user url and returns an array of user objects 
  */
  updateFollowers(user: string) {
    return this.http.get<any>(`https://api.github.com/users/${user}/followers`);
  }

  constructor(private http: HttpClient) {}
}
