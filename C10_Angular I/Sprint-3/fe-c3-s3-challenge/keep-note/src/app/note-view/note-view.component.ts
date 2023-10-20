import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {


  note:Note[] = Notes;

  constructor() { }

  ngOnInit(): void {
  }
  searchText:string = "";

  onSearch(noTitle:string) {
    if (noTitle === " " || !noTitle)
    this.note = Notes;
  else {
    this.note = Notes;
    this.note = Notes.filter(c => c.title?.startsWith(noTitle));
  }
}

}
