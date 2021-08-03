import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { CommentsDialogComponent } from './components/comments-dialog/comments-dialog.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewProductComponent,
    CommentsDialogComponent,
    CommentComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
