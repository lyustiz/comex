import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-complex-widget',
  templateUrl: './complex-widget.component.html',
  styleUrls: ['./complex-widget.component.scss']
})
export class ComplexWidgetComponent implements OnInit {

  @Input() title: string;
  @Input() colorClass = 'bg-success text-white';

  constructor() { }

  ngOnInit() {
  }

}
