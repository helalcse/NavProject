import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BangladeshComponent } from './bangladesh/bangladesh.component';
import { PakistanComponent } from './pakistan/pakistan.component';
import { IndiaComponent } from './india/india.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'bangladesh', component: BangladeshComponent},
  {path:'pakistan', component: PakistanComponent},
  {path:'india', component: IndiaComponent},

  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
