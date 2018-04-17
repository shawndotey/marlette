import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LikeButtonComponent } from './shared/like-button-component/like-button.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { HomeViewComponent } from './home-view/home-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeButtonComponent,
    AdminViewComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
