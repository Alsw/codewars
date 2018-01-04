import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css'],
  animations: [
    trigger('State', [
      state('inactive', style({
        opacity: '0',
      })),
      state('active', style({
        opacity: '0.5',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class MyProductComponent implements OnInit {
  @Input() title: string;
  @Input() discription: string;
  @Input() imgUrl: string;
  public type: boolean;
  status: string;
  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    const dom = this.elementRef.nativeElement.querySelectorAll('prf_thumb');
  }
  showDetail() {
    console.log(213);
  }
  clicks() {
    this.type = !this.type;
    this.status = this.type ? 'active' : 'inactive';
    console.log(this.type);
  }
}
