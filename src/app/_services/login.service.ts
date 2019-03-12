import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {Config} from '../config';

import 'rxjs/add/operator/map'


@Injectable()
export class LoginService {
    constructor(private http: Http, private router: Router) { }

    login(username: string, password: string) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(Config.API_URL + '/auth/', JSON.stringify({ username: username, password: password }), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('username', username);
                }
                return user;
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
    }
}