import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Subject } from 'rxjs/Subject';
import { UserModel } from './model/user.model';

@Injectable()
export class UserService {

    private userMockUrl = 'assets/mock/user.json';
    public subject: Subject<UserModel> = new Subject<UserModel>();
    constructor(private http: Http) { }
    get currentUser(): Observable<UserModel> {
        return this.subject.asObservable();
    }

    login(user: UserModel) {
        this.http.get(this.userMockUrl).map((response: Response) => {
            const users = response.json();
            if (users && users.token) {
                localStorage.setItem('currentUser', JSON.stringify(users));
                this.subject.next(Object.assign({}, users));
            }
            return users;
        }).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.subject.next(Object.assign({}));
    }

    register(User: UserModel) {
        this.http.get(this.userMockUrl).map((res: Response) => {
            const user = res.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.subject.next(Object.assign({}, user));
            }
        }).subscribe(data => {
            console.log(data);
        }, (e) => {
            console.log(e);
        });
    }
}
