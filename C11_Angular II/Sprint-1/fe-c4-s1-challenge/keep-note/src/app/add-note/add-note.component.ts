import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Notes } from '../model/notes';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  

  constructor(private obj : NoteService) { }

  ngOnInit(): void {
  }

  note:Note = {title:"",content:""}

  saveNote(){
    this.obj.addNote(this.note).subscribe(
      {next(){alert("Data-Added Succesfully")}}
    )
  }

  



}
