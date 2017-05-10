import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppService } from './app.service';

import { ImagePathPipe } from './image-path.pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
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
        path: '**',
        redirectTo: ''
      }]
    )],
  declarations: [AppComponent, NavComponent, HomeComponent, AboutComponent, ContactComponent, ImagePathPipe],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
