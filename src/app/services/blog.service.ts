import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.type';
import blog from '../../assets/json-data/blog.json'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private dynaPosts: Post[] = []
  constructor() {
    this.initPosts();
  }
  private initPosts(): void {
    let posts: {
      date,
      title,
      description,
      content
    }[] = blog.posts;
    for (let i = 0; i < posts.length; i++) {
      this.dynaPosts.push(
        {
          id: i + 1,
          date: posts[i].date,
          title: posts[i].title,
          description: posts[i].description,
          content: posts[i].content
        }
      );
    }
  }
  public getPosts(): Post[] {
    return this.dynaPosts;
  }
  public getPostById(id: number): Observable<Post> | null {
    let post = this.dynaPosts.find(element => element.id == id)
    return post ? of(post) : null;
  }
}
