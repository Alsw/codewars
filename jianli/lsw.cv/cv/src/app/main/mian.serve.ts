import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainService {
    private BaseUrl = 'assets/mockData/product.json';
    constructor(private http: Http) { }
    get productList(): Observable<any> {
        return this.http.get(this.BaseUrl);
    }

}
