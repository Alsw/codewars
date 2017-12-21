import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {
  @Input() title: string;
  @Input() discription: string;
  @Input() imgUrl: string;
  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    const dom = this.elementRef.nativeElement.querySelectorAll('prf_thumb');
    console.log(dom);
  }
  showDetail() {
    console.log(213);
  }
}
