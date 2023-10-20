import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }



  saveNote(id:string, title:string, note:string){
    let newNote:Note = {
      id:parseInt(id),
      title: title,
      content: note,
    };
    alert(newNote.title)
    Notes.push(newNote);

  }
}
