import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private obj2:HttpClient) { }

    url:string="http://localhost:3000/notes"

    getNotes():Observable<Array<Note>>{
      return this.obj2.get<Array<Note>>(this.url)
    }

    addNote(data:Note){
      return this.obj2.post(this.url,data)
    }
}
