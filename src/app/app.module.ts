import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppService } from './app.service';

import { ImagePathPipe } from './image-path.pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule,
    RouterModule.forRoot(
      [{
        path: '',
        component: HomeComponent
      }, {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'contact',
        component: ContactComponent
      }, {
        path: 'products',
        component: CategoryComponent
      }, {
        path: 'product/:categoryId',
        component: ProductsComponent,
      }, {
        path: '**',
        redirectTo: ''
      }]
    )],
  declarations: [AppComponent, NavComponent, LoadingComponent, HomeComponent, AboutComponent, CategoryComponent, ProductsComponent, ContactComponent, ImagePathPipe],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
