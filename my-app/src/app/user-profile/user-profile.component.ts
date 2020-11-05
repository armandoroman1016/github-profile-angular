import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],

})
export class UserProfileComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  user;
  followers;
  hello = "jeest"
  ngOnInit(): void {
    this.githubService
      .updateUser('benawad')
      .toPromise()
      .then((userInfo) => {
        this.user = userInfo;
      });

    // this.gitHubService
    //   .updateFollowers('benawad')
    //   .then((data) => (this.followers = data));
  }

  // foo(user) {
  //   this.updateUser(user);
  //   this.updateFollowers(user);
  // }

  // updateUser(user: string) {
  //   this.gitHubService
  //     .updateUser(user)
  //     .then((u) => (this.user = u));
  // }

  // updateFollowers(user) {
  //   this.gitHubService
  //     .updateFollowers(user)
  //     .then((data) => (this.followers = data));
  // }
}
