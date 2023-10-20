import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../Models/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input()
  list1?:Contact;

  @Output()
  sidelist:EventEmitter<Contact> = new EventEmitter<Contact>();

  mouseOver(list1:any){
    this.sidelist.emit(list1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
