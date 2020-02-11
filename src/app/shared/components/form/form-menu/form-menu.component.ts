import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.scss']
})
export class FormMenuComponent implements OnInit {

 @Input() columns: string[];

  constructor() { }



  ngOnInit() {
  }

}
