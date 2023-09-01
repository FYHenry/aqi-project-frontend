import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { MapComponent } from './components/map/map.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { InscriptionFormComponent } from './components/inscription-form/inscription-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MapComponent,
    BookmarksComponent,
    NavBarComponent,
    HistoryComponent,
    LoginFormComponent,
    InscriptionFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
