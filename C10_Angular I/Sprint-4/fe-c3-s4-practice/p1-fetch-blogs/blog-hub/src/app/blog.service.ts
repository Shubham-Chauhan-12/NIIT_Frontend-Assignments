import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './models/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private obj2: HttpClient) { }

  url: string = "http://localhost:3000/blogs"
  getAllBlogs(): Observable<Array<Blog>> {
    return this.obj2.get<Array<Blog>>(this.url)
  }
  storeData(data1: Blog) {

    return this.obj2.post(this.url, data1)
  }
}
