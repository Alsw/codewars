import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
@Directive({
  selector: '[appCloseMessage]'
})
export class CloseMessageDirective {

  private _domElem: ElementRef;
  private _renderer: Renderer;

  constructor(elem: ElementRef, renderer: Renderer) {
    this._domElem = elem.nativeElement;
    this._renderer = renderer;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log(1);
    this._renderer.setElementStyle(this._domElem, 'opacity', '0');
  }

}
