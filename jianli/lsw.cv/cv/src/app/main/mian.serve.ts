import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MyProductModel } from './model/myProduct.model';

import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
    private BaseUrl = 'assets/mockData/product.json';
    constructor(private http: Http) { }
    get productList() {
        return this.http.get(this.BaseUrl);
    }
}
