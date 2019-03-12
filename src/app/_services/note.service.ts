import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Note } from '../_models/index';
import { Config } from '../config';

@Injectable()
export class NoteService {
    constructor(private http: Http) {}
    
    getAll() {
        return this.http.get(Config.API_URL +'/notes/', this.jwt()).map((response: Response) => response.json());
    }

    create(note: Note) {
        return this.http.post(Config.API_URL +'/notes/', JSON.stringify(note), this.jwt()).map((response: Response) =>  response.json())
    }

    update(note: Note) {
        return this.http.put(Config.API_URL +'/notes/' + note.id, JSON.stringify(note), this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(Config.API_URL +'/notes/' + id, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers(
            { 
                'Authorization': 'Token ' + currentUser.token ,
                'Content-Type': 'application/json',
            });
            return new RequestOptions({ headers: headers });
        }
    }
}