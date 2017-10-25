import { Routes } from '@angular/router'
import { SectionComponent } from './section/section.component'
import { ContactsComponent } from './contacts/contacts.component'
import { ContactRegisterComponent } from './contact-register/contact-register.component'

export const ROUTES : Routes = [
    {path: '', component : SectionComponent},
    {path: 'api/contacts', component: ContactsComponent},
    {path: 'api/add/contact', component: ContactRegisterComponent},
    {path: 'api/alter/contact/:id', component: ContactRegisterComponent}
]
