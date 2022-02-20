import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.type';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts()
  }

}
