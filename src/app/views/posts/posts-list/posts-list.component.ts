import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../shared/services/posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: any = [];

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
}
