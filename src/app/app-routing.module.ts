import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { OpenapiComponent } from './components/openapi/openapi.component';

const routes: Routes = [
    {
        path: "register-form",
        component: RegisterFormComponent

    },
    {
        path: "openapi",
        component: OpenapiComponent
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
