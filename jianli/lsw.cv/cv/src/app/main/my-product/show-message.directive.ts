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
    this._renderer.setElementStyle(this._domElem, 'opacity', '0.5');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._renderer.setElementStyle(this._domElem, 'opacity', '0');
  }
}
