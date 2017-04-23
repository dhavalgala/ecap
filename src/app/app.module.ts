import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,
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
  declarations: [AppComponent, NavComponent, HomeComponent, AboutComponent, ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
