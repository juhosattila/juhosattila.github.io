import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.type';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getPosts(): Post[] {
    return POSTS
  }

  getPostById(id: number): Observable<Post> | null {
    let post = POSTS.find(element => element.id == id)
    return post ? of(post) : null
  }
}
