import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';
import { ListCategoryComponent } from '../category/list-category/list-category.component';
import { CreateProductComponent } from '../product/create-product/create-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: CreateProductComponent
  },
  {
    path: 'category',
    component: ListCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsupermarketRoutingModule { }
