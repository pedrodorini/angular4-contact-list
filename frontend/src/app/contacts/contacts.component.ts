import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Contact } from './contact.model'
import { ContactsService } from './contacts.service'
import { Observable } from 'rxjs/Observable'


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
})

@Injectable()
export class ContactsComponent implements OnInit {

    contacts: Contact[]

    constructor(private contactsService: ContactsService) {}


        ngOnInit() {
            this.contactsService.contacts().subscribe(contact => {
                this.contacts = contact
            })
        }

        loadContacts() {
            this.contactsService.contacts().subscribe(contact => {
                this.contacts = contact
            })
        }

        delete(id: number): void {
            this.contactsService.deleteContact(id).subscribe(contact => {
                this.loadContacts()
            })
        }
    }
