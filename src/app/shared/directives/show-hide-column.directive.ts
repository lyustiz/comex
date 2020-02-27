import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appShowHideColumn]'
})
export class ShowHideColumnDirective {

  @Input()
  set appShowHideColumn(show: boolean) {
    const showClass = show ? '' : 'hide';
    this.el.nativeElement.classList.toggle('hide');
  }

  constructor(private el: ElementRef) { }

}
