import { Component, OnInit } from '@angular/core';
import { Notes } from '../Model/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search : string = ""
  findNotes = Notes

  find(){
    if(this.search == "" || !this.search){
      this.findNotes = Notes;
      window.alert("Empty input")
    }
    else{
      this.findNotes = Notes;
      this.findNotes = this.findNotes.filter(fil => fil.noteTitle.startsWith(this.search.toLowerCase()))
      alert("Successfully Displayed the Search Result")
    }
  }
}
