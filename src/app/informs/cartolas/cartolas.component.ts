import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartolas',
  templateUrl: './cartolas.component.html',
  styles: []
})
export class CartolasComponent implements OnInit {

  public texto: string;
  public lista: string[];

  constructor() 
  { 
    this.texto = 'hola mundo';
    this.lista = ['uno', 'dos', 'tres'];
  }

  ngOnInit() {
  }

  cambioTexto()
  {
    this.texto = 'chao mundo'; 
  }

}
