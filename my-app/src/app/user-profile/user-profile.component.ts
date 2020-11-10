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
      .updateUser('armandoroman1016')
      .toPromise()
      .then((userInfo) => {
        this.user = userInfo;
      });

    this.githubService
      .updateFollowers('armandoroman1016')
      .toPromise()
      .then((data) => (this.followers = data));
  }

  foo(user: string) {
    console.log(user)
    this.updateUser(user);
    this.updateFollowers(user);
  }

  updateUser(user: string) {
    this.githubService
      .updateUser(user)
      .toPromise()
      .then((u) => (this.user = u))
      .catch(e => console.log(e))
  }

  updateFollowers(user) {
    this.githubService
      .updateFollowers(user)
      .toPromise()
      .then((data) => (this.followers = data))
      .catch(e => console.log(e))
  }
}
