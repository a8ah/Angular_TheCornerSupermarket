import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsupermarketComponent } from './layoutsupermarket/layoutsupermarket.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutsupermarketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
