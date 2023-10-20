import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  // blogs: Blog[] = [];

  // constructor() { }

  // ngOnInit(): void {

  // }

  blogs: Blog[] = [];

  constructor(private abc: BlogService) { }

  ngOnInit(): void {
    this.abc.getAllBlogs().subscribe({
      next: da => {
        this.blogs = da
      },

      error: err => {
        alert("network error");
      }
    });
  }

}
