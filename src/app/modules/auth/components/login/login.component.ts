import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public list: string[] =  ['uno', 'dos', 'tres'];

  constructor() { }

  ngOnInit() {
  }

}
