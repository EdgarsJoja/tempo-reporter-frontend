import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/requests/post.service';
import { HttpClientModule } from '@angular/common/http';
import { GetService } from './services/requests/get.service';
import { PatchService } from './services/requests/patch.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    GetService,
    PatchService
  ]
})
export class ApiModule { }
