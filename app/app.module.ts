import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P1Component } from './p1/p1.component';
import { HomeComponent } from './home/home.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';

@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    HomeComponent,
    P2Component,
    P3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
