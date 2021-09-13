import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

import { MatListModule} from '@angular/material/list/';
import { MatTableModule} from '@angular/material/table/';

@NgModule({
  declarations: [
    CreateCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatListModule,
    MatTableModule,
    
  ]
})
export class CategoryModule { }
