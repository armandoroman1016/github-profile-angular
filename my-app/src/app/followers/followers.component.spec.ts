import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing"

import { FollowersComponent } from './followers.component';

const mockFollower = {
  "login": "Test",
  "id": 19551160,
  "node_id": "MDQ6VXNlcjE5NjU2MTYw",
  "avatar_url": "https://avatars0.githubusercontent.com/u/382?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/test",
  "html_url": "https://github.com/test",
  "followers_url": "https://api.github.com/users/test/followers",
  "following_url": "https://api.github.com/users/test/following{/other_user}",
  "gists_url": "https://api.github.com/users/test/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/test/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/test/subscriptions",
  "organizations_url": "https://api.github.com/users/test/orgs",
  "repos_url": "https://api.github.com/users/test/repos",
  "events_url": "https://api.github.com/users/test/events{/privacy}",
  "received_events_url": "https://api.github.com/users/test/received_events",
  "type": "User",
  "site_admin": false
}

describe('FollowersComponent', () => {
  let component: FollowersComponent;
  let fixture: ComponentFixture<FollowersComponent>;
  let testFollower = mockFollower
  beforeEach(async () => {
    testFollower = mockFollower
    await TestBed.configureTestingModule({
      declarations: [FollowersComponent],
      imports:[
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowersComponent);
    component = fixture.componentInstance;
    component.follower = testFollower
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display follower login', () => {
    const login: HTMLElement = fixture.nativeElement.querySelector('.login')
    expect(login.innerHTML).toEqual(testFollower.login)
  })

});
