import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactList = [
    {
      firstName: 'Sanket',
      lastName: 'Ghule',
      email: 'a@gmail.com',
      phone: '7276251528',
      status: 'active',
      id: 21.862218151741473,
    },
  ];

  constructor() {}

  /**
   * Get list of contact
   */
  getContactList(): Observable<any[]> {
    return of(this.contactList);
  }

  /**
   * Get contact by contact id
   * @param contactId
   */
  getContact(contactId): {} {
    return this.contactList.find(
      (contact) => contact.id.toString() === contactId
    );
  }
  /**
   * Update contact
   * @param contactToUpdate
   */
  updateContact(contactToUpdate): any[] {
    return (this.contactList = this.contactList.map((contact) =>
      contact.id === contactToUpdate.id
        ? Object.assign({}, contact, contactToUpdate)
        : contact
    ));
  }
  /**
   * Add new contact
   * @param contact
   */
  addContact(contact: any): void {
    contact['id'] = Math.random() * 100;
    this.contactList.push(contact);
  }

  /**
   * Delete contact
   * @param contactId
   */
  deleteContact(contactId): any[] {
    return (this.contactList = this.contactList.filter(
      (contact) => contact.id !== contactId
    ));
  }
}
