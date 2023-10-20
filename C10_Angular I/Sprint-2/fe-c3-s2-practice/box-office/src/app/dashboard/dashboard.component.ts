import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../Models/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="Trending-Movies";
  movies = MOVIES;

  searching:string = "";

  search(){
    if(this.searching == "" || !this.searching){
      this.movies = MOVIES;
    }

    else
    {
      this.movies = MOVIES;
      this.movies = this.movies.filter(fil => fil.movieTitle?.startsWith(this.searching.toLowerCase()));
    
    }
  }

  reset(){
    this.searching =="";
    this.movies = MOVIES;
    
  }
  
}
