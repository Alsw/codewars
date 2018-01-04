import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {
    private MockUrl = 'assets/mock/user.json';
    constructor(private http: Http) { }

    public search(value) {
        return this.http.get(`${this.MockUrl}?key=${value}`).map(res => res.json());
    }
}
