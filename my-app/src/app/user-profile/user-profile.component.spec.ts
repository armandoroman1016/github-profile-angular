import { GithubService } from './../github.service';
import {
  ComponentFixture,
  TestBed,
  ComponentFixtureAutoDetect,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserProfileComponent } from './user-profile.component';
import {FollowersComponent } from "../followers/followers.component"
// import { By } from '@angular/platform-browser';

import { of, throwError } from 'rxjs';
import { last } from 'rxjs/operators';

const testUser = {
  login: 'armandoroman1016',
  id: 51098659,
  node_id: 'MDQ6VXNlcjUxMDk4NjU5',
  avatar_url: 'https://avatars2.githubusercontent.com/u/51098659?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/armandoroman1016',
  html_url: 'https://github.com/armandoroman1016',
  followers_url: 'https://api.github.com/users/armandoroman1016/followers',
  following_url:
    'https://api.github.com/users/armandoroman1016/following{/other_user}',
  gists_url: 'https://api.github.com/users/armandoroman1016/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/armandoroman1016/starred{/owner}{/repo}',
  subscriptions_url:
    'https://api.github.com/users/armandoroman1016/subscriptions',
  organizations_url: 'https://api.github.com/users/armandoroman1016/orgs',
  repos_url: 'https://api.github.com/users/armandoroman1016/repos',
  events_url: 'https://api.github.com/users/armandoroman1016/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/armandoroman1016/received_events',
  type: 'User',
  site_admin: false,
  name: 'Armando Roman',
  company: null,
  blog: 'armandoroman.dev',
  location: 'Turlock, CA',
  email: null,
  hireable: null,
  bio: 'Web Developer.\r\nStudent at Lambda School.\r\nForever Forward.',
  twitter_username: null,
  public_repos: 113,
  public_gists: 0,
  followers: 10,
  following: 9,
  created_at: '2019-05-27T21:53:51Z',
  updated_at: '2020-11-04T16:14:06Z',
};

let testFollowers = [
  {
  "login": "Bastlifa",
  "id": 19656160,
  "node_id": "MDQ6VXNlcjE5NjU2MTYw",
  "avatar_url": "https://avatars0.githubusercontent.com/u/19656160?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Bastlifa",
  "html_url": "https://github.com/Bastlifa",
  "followers_url": "https://api.github.com/users/Bastlifa/followers",
  "following_url": "https://api.github.com/users/Bastlifa/following{/other_user}",
  "gists_url": "https://api.github.com/users/Bastlifa/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Bastlifa/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Bastlifa/subscriptions",
  "organizations_url": "https://api.github.com/users/Bastlifa/orgs",
  "repos_url": "https://api.github.com/users/Bastlifa/repos",
  "events_url": "https://api.github.com/users/Bastlifa/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Bastlifa/received_events",
  "type": "User",
  "site_admin": false
  },
  {
  "login": "AndrewA0112",
  "id": 30938535,
  "node_id": "MDQ6VXNlcjMwOTM4NTM1",
  "avatar_url": "https://avatars3.githubusercontent.com/u/30938535?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AndrewA0112",
  "html_url": "https://github.com/AndrewA0112",
  "followers_url": "https://api.github.com/users/AndrewA0112/followers",
  "following_url": "https://api.github.com/users/AndrewA0112/following{/other_user}",
  "gists_url": "https://api.github.com/users/AndrewA0112/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AndrewA0112/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AndrewA0112/subscriptions",
  "organizations_url": "https://api.github.com/users/AndrewA0112/orgs",
  "repos_url": "https://api.github.com/users/AndrewA0112/repos",
  "events_url": "https://api.github.com/users/AndrewA0112/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AndrewA0112/received_events",
  "type": "User",
  "site_admin": false
  }
]

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let userDiv: HTMLElement;
  let getUserSpy: jasmine.Spy;
  let user;
  let getFollowersSpy: jasmine.Spy

  beforeEach(async () => {
    user = testUser;

    const githubService = jasmine.createSpyObj('GithubService', [
      'updateUser',
      "updateFollowers"
    ]);

    getUserSpy = githubService.updateUser.and.returnValue(of(testUser));
    getFollowersSpy = githubService.updateFollowers.and.returnValue(of(testFollowers))

    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent, FollowersComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: GithubService, useValue: githubService },
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],

    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    userDiv = fixture.nativeElement.querySelector('.user');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('will render user data after ngOnInit()', async () => {
    expect(userDiv).toBeFalsy()
    fixture.detectChanges() // ngOnInit
    userDiv = fixture.nativeElement.querySelector('.user');
    expect(userDiv).toBeTruthy()
  });
});
