import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.type';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html'
})
export class PostDetailsComponent implements OnInit {

  id: number
  post: Post
  prev: boolean = false
  next: boolean = false

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPost(this.id)
      this.nextPost()
      this.previousPost()
    });
  }
  private getPost(id) {
    this.blogService.getPostById(id)
      ?.subscribe(
        post => {
          if (post) {
            this.post = post
          } else {
            this.post = null
          }
        }
      );
  }
  private nextPost() {
    this.next = this.blogService.getPostById(this.id + 1) ? true : false
  }
  private previousPost() {
    this.prev = this.blogService.getPostById(this.id - 1) ? true : false
  }
}