import { GithubService } from './../github.service';
import { Component, OnInit, Output, EventEmitter, ɵConsole } from '@angular/core';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {
  userForm
  @Output() userSearchEvent: EventEmitter<any> = new EventEmitter<string>()

  constructor(private formBuilder: FormBuilder, private gitHubService: GithubService) {
    this.userForm = this.formBuilder.group({
      userName: ""
    })
  }

  handleSubmit(){

    this.userSearchEvent.emit(this.userForm.value.userName)
    this.userForm.reset()
  }

  ngOnInit(): void {}
}
