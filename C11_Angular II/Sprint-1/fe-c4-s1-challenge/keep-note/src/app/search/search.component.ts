import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  text: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  searchNote() {

    this.searchTextChanged.emit(this.text);
  }
}



