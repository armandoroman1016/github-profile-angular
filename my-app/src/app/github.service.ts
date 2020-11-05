import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class GithubService {
  updateUser(user: string) {
    return this.http.get(`https://api.github.com/users/${user}`)
  }

  /*
   Takes in a user url and returns an array of user objects
  */
  updateFollowers(user: string) {
    return this.http.get(`https://api.github.com/users/${user}/followers`).toPromise();
  }

  constructor(private http: HttpClient) {}
}
