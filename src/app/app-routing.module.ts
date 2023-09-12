import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';

const routes: Routes = [
    {
        path: "register-form",
        component: RegisterFormComponent

    },
    {
        path: "",
        pathMatch: "full",
        component: MapComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }