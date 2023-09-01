import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BookmarksComponent } from './components/map/bookmarks/bookmarks.component';
import { NavBarComponent } from './components/map/nav-bar/nav-bar.component';
import { HistoryComponent } from './components/map/history/history.component';
import { LoginFormComponent } from './components/map/login-form/login-form.component';
import { InscriptionFormComponent } from './components/map/inscription-form/inscription-form.component';
import { ForumComponent } from './components/forum/forum.component';
import { ThreadComponent } from './components/forum/thread/thread.component';
import { HomeComponent } from './components/forum/home/home.component';
import { BackOfficeComponent } from './components/back-office/back-office.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BookmarksComponent,
    NavBarComponent,
    HistoryComponent,
    LoginFormComponent,
    InscriptionFormComponent,
    ForumComponent,
    ThreadComponent,
    HomeComponent,
    BackOfficeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
