import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Contact } from './contact.model'
import { ContactsService } from './contacts.service'
import { Observable } from 'rxjs/Observable'
import { NotificationService } from '../shared/messages/notification.service'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    animations : [
        trigger('contactsAppeared', [
            state('ready', style({
                opacity: 1
            })),
            transition('void => ready', [
                style({
                    opacity: 0,
                    transform: 'translate( -50px)'
                }), animate('500ms 0s ease-in-out')
            ])
        ])
    ]
})

@Injectable()
export class ContactsComponent implements OnInit {

    contactsState = 'ready'
    contacts: Contact[]
    hasContacts: boolean = true

    constructor(private contactsService: ContactsService,
                private notificationService: NotificationService) {}


        ngOnInit() {
            this.contactsService.contacts().subscribe(contact => {
                this.contacts = contact
                if (this.contacts.length === 0) this.hasContacts = false
            })
        }

        loadContacts() {
            this.contactsService.contacts().subscribe(contact => {
                this.contacts = contact
                if (this.contacts.length === 0) this.hasContacts = false
            })
        }

        delete(id: number): void {
            this.contactsService.deleteContact(id).subscribe(contact => {
                this.loadContacts()
                this.notificationService.notify(`Contact deleted successfully!`)
            })
        }
    }
