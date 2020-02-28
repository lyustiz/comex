import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appShowHideColumn]'
})
export class ShowHideColumnDirective implements OnInit {


  @Input('appShowHideColumn') show: boolean;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    if (!this.show) {
      this.render.addClass(this.el.nativeElement, 'd-none');
    } else {
      this.render.removeClass(this.el.nativeElement, 'd-none');
    }
  }
}
