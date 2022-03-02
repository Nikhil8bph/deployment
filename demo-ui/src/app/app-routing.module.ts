import { AddpageComponent } from './components/addpage/addpage.component';
import { ModifypageComponent } from './components/modifypage/modifypage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home', component: HomepageComponent},
  { path:'modify/:id', component: ModifypageComponent},
  { path:'add', component: AddpageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
