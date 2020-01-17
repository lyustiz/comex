import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styles: []
})
export class AppNavbarComponent implements OnInit {

  private url: string;
  collapsed = true;

  constructor(private router: Router) {  }

  ngOnInit() {
  }

}
