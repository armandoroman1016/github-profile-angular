import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],

})

export class UserProfileComponent implements OnInit {

  constructor(private gitHubService: GithubService) { }

  user
  followers

  
  ngOnInit(): void {
    this.gitHubService
    .updateUser("armandoroman1016")
      .subscribe(userInfo => {
        this.user = userInfo
      })
      
      this.gitHubService
      .updateFollowers("armandoroman1016")
      .subscribe(data => this.followers = data)
    }
  
  foo(user){
    this.updateUser(user)
    this.updateFollowers(user)
  }
  
  updateUser(user: string) {
    this.gitHubService
    .updateUser(user)
    .subscribe(u => this.user = u)
  }

  updateFollowers(user) {
    this.gitHubService.updateFollowers(user)
      .subscribe(data => this.followers = data)
  }
}

