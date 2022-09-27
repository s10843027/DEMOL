import { P3Component } from './p3/p3.component';
import { P2Component } from './p2/p2.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { P1Component } from './p1/p1.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'P1',component:P1Component},
  {path:'P2',component:P2Component},
  {path:'P3',component:P3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
