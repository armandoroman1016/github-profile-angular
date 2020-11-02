import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FollowersComponent } from './followers/followers.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { GithubService } from './github.service'
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    FollowersComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: UserProfileComponent },
    ])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
