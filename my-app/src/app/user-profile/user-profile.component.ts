import { Component, OnInit, NgModule } from '@angular/core';
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

  ngOnInit(): void {
    this.githubService
      .updateUser('benawad')
      .toPromise()
      .then((userInfo) => {
        this.user = userInfo;
      });

    this.githubService
      .updateFollowers('benawad')
      .toPromise()
      .then((data) => (this.followers = data));
  }

  foo(user) {
    this.updateUser(user);
    this.updateFollowers(user);
  }

  updateUser(user: string) {
    this.githubService
      .updateUser(user)
      .toPromise()
      .then((u) => (this.user = u));
  }

  updateFollowers(user) {
    this.githubService
      .updateFollowers(user)
      .toPromise()
      .then((data) => (this.followers = data));
  }
}
