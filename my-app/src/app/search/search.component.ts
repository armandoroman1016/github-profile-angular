import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  userForm

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      userName: ""
    })
  }

  // onSubmit
  handleInput(){
    console.log(this.userForm.value)
  }
  ngOnInit(): void {}
}
