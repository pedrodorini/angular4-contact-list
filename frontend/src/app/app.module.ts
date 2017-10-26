import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts/contacts.service';
import { ContactRegisterComponent } from './contact-register/contact-register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NotificationService } from './shared/messages/notification.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    ContactsComponent,
    ContactRegisterComponent,
    FooterComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ContactsService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
