import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { APP_API } from '../app.api'
import { Contact } from './contact.model'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ContactsService {
    constructor(private http: Http){}

    contacts(): Observable<Contact[]> {
        return this.http.get(`${APP_API}/api/contacts`)
        .map(res => res.json())
    }

    deleteContact(id: number): Observable<Contact> {
        return this.http.delete(`${APP_API}/api/contacts/${id}`)
        .map(res => res.json())
    }

    addContact(contact: Object): Observable<Contact> {
        const bodyString = JSON.stringify(contact)
        const headers = new Headers({'Content-Type': 'application/json'})
        const options = new RequestOptions({headers: headers})
        return this.http.post(`${APP_API}/api/contacts`, contact, options)
        .map(res => res.json())
    }

    alterContact(contact: Object): Observable<Contact> {
        const body = JSON.stringify(contact)
        const headers = new Headers({'Content-Type': 'application/json'})
        const options = new RequestOptions({headers: headers})
        return this.http.put(`${APP_API}/api/alter/contact/${body["id"]}`, body, options)
        .map(res => res.json())
    }

    getOne(id: number): Observable<Contact> {
        return this.http.get(`${APP_API}/api/alter/${id}`)
        .map(res => res.json())
    }

}
