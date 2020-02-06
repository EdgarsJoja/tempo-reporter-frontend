import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/requests/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ]
})
export class ApiModule { }
