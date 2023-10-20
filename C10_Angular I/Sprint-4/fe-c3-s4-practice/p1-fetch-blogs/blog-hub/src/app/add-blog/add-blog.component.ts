import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{

  blog: Blog = {};
  constructor(private obj:BlogService) { }

  saveBlog() {
    this.obj.storeData(this.blog).subscribe({next(){alert("blog added successfully")}})
  }
}
