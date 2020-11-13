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
  loading = false

  ngOnInit(): void {

    this.loading = true

    this.githubService
      .updateUser('armandoroman1016')
      .toPromise()
      .then((userInfo) => {
        this.user = userInfo;
        this.loading = false
      })
      .catch(err => console.log(err))

    this.githubService
      .updateFollowers('armandoroman1016')
      .toPromise()
      .then((data) => {
        this.followers = data
        this.loading = false
      })
      .catch(e => console.log(e));
  }

  foo(user: string) {
    this.loading = true
    this.updateUser(user);

    this.loading = true
    this.updateFollowers(user);
  }

  updateUser(user: string) {
    this.githubService
      .updateUser(user)
      .toPromise()
      .then((u) => {
        this.user = u
        this.loading = false
      })
      .catch(e => console.log(e))
  }

  updateFollowers(user) {
    this.githubService
      .updateFollowers(user)
      .toPromise()
      .then((data) => {
        this.followers = data
        this.loading = false
      })
      .catch(e => console.log(e))
  }
}
