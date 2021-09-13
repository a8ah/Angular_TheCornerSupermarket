import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsupermarketRoutingModule } from './layoutsupermarket-routing.module';
import { LayoutsupermarketComponent } from './layoutsupermarket.component';

// import {ComponentsModule} from '../components/components.module';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';


import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar/';
import { MatSidenavModule } from '@angular/material/sidenav/';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    LayoutsupermarketComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutsupermarketRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule

    // ,
    // ComponentsModule
  ]
})
export class LayoutsupermarketModule { }
