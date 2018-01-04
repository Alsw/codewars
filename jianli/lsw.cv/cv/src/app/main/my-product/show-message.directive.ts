import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
@Directive({
  selector: '[appShowMessage]'
})
export class ShowMessageDirective {

  private _domElem: ElementRef;
  private _renderer: Renderer;

  constructor(elem: ElementRef, renderer: Renderer) {
    this._domElem = elem.nativeElement;
    this._renderer = renderer;
  }


  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(0);
    this._renderer.setElementStyle(this._domElem, 'opacity', '0.5');
  }

}
