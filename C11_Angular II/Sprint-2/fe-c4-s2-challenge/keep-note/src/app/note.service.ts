import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Note } from './models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  getNote():Observable<Array<Note>>{
    return this.http.get<Array<Note>>("http://localhost:3000/notes");
  }

  postNote(note:any){
    console.log(note)
    console.log("poste method")
    return this.http.post("http://localhost:3000/notes",note)
    
  }
}
