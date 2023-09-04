import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/forum/home/home.component';

const routes: Routes = [
    {path: "home", component: HomeComponent, title: "Home"},
    {path: "", pathMatch: "full", redirectTo: "home"},
    {path: "**", redirectTo: "home"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }