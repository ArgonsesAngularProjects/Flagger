import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contact: { name: string, email: string, message: string } = {
    name: '',
    email: '',
    message: ''
  };

  submitContactForm() {
    alert('Sended:' + this.contact);
  }
}
