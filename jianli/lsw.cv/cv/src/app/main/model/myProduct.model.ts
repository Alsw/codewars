import { Injectable } from '@angular/core';
@Injectable()
export class MyProductModel {
    title: string;
    imgUrl: string;
    discription: string;
    constructor(a, b, c) {
        this.title = a;
        this.imgUrl = c;
        this.discription = b;
    }
}
