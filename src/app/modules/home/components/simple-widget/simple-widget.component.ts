import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-widget',
  templateUrl: './simple-widget.component.html',
  styleUrls: ['./simple-widget.component.scss']
})
export class SimpleWidgetComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() text: string;
  @Input() colorClass = 'bg-success text-white';

  constructor() { }

  ngOnInit() {
  }

}
