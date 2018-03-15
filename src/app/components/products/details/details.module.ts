import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailsComponent } from './details.component';
import { routingList } from './details.routing';

// carrega dados do header
import { HeaderModule } from './../../header/header.module';

// carrega dados do login social
import { SocialModule } from './../../social/social.module';

// service
import { ProductService } from './../../../services/products.service';
import { CommentsService } from './../../../services/comments.service';

@NgModule({
  imports: [
    CommonModule,
    routingList,
    HeaderModule,
    FormsModule,
    SocialModule,
    ReactiveFormsModule
  ],
  exports: [
    DetailsComponent
  ],
  declarations: [
    DetailsComponent
  ],
  providers: [
    ProductService,
    CommentsService
  ]
})
export class DetailsModule { }
