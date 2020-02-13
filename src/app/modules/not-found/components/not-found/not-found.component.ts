import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: [`
        .fondo-404{
          background: url("../assets/images/404.webp");
          background-size: contain;
          background-repeat: no-repeat;

        }
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
