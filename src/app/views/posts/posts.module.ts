import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsListComponent} from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';


@NgModule({
  declarations: [
    PostsListComponent,
    AddPostComponent,
    UpdatePostComponent,
    ShowPostComponent,
    DeletePostComponent,

  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule {}
