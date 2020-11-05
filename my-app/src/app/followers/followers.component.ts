import { Component, EventEmitter, OnInit, Output, NgModule } from '@angular/core';
import { GithubService } from '../github.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
})

export class FollowersComponent implements OnInit {
  @Input() follower;
  @Output() updateEvent: EventEmitter<any> = new EventEmitter<string>();

  constructor(private gitHubService: GithubService) {}

  updateUser(user: string) {
    this.updateEvent.emit(user);
  }

  ngOnInit(): void {}
}
