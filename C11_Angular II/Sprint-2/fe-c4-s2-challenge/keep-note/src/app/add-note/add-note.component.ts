import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from '../models/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {


  addCard:Note ={};

  minDate:Date = new Date;

  constructor(private noteservices:NoteService,private _snackBar: MatSnackBar) {
    this.minDate.setDate(this.minDate.getDate()+1)
   }

  ngOnInit(): void {
  }
  saveNote(noteForm:any){
    let Note:Note ={
      title: noteForm.title,
      content: noteForm.content,
      reminderDate: noteForm.date,
      category: noteForm.addcategory,
      priority: noteForm.priority

    }
    console.log(noteForm.content)
    console.log(noteForm)
    console.log(noteForm.value)
    this.noteservices.postNote(noteForm).subscribe( card => {
      alert("New card Added");
      this.addCard = {}
    })
   }

   onSubmit(noteForm: any){
    this._snackBar.open('Note Added successfully', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
      })
      this.saveNote(this.addCard);
   }
  
}
