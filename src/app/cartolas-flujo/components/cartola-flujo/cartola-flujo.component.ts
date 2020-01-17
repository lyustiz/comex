import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartola-flujo',
  templateUrl: './cartola-flujo.component.html',
  styles: []
})


/*interface Form(){
    id_banco: Number;

  }*/
export class CartolaFlujoComponent implements OnInit {


  

  banco: string;

  form: object;

  constructor() {
      this.form = {
        id_banco: '',
        nb_banco: ''
      }
   }

  ngOnInit() {
  }

}
