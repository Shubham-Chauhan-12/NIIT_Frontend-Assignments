import { Component, OnInit } from '@angular/core';
import { Contact } from '../Models/contact';
import { CONTACTS } from '../Models/contacts';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {

   list:Contact[] = CONTACTS;

   list2:Contact ={}

  constructor() { }

  ngOnInit(): void {
  }



}
