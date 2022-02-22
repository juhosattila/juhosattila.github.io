import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.type';
import blog from '../../assets/json-data/blog.json'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getPosts(): Post[] {
    return blog.posts
  }

  getPostById(id: number): Observable<Post> | null {
    let post = blog.posts.find(element => element.id == id)
    return post ? of(post) : null
  }
}
