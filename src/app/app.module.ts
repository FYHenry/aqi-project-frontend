import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BookmarksComponent } from './components/map/bookmarks/bookmarks.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HistoryComponent } from './components/map/history/history.component';
import { ForumComponent } from './components/forum/forum.component';
import { BackOfficeComponent } from './components/back-office/back-office.component';
import { UserComponent } from './components/user/user.component';
import { LoginFormComponent } from './components/user/login-form/login-form.component';
import { InscriptionFormComponent } from './components/user/inscription-form/inscription-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/back-office/alert/alert.component';
import { ModerationComponent } from './components/back-office/moderation/moderation.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BookmarksComponent,
    NavBarComponent,
    HistoryComponent,
    ForumComponent,
    BackOfficeComponent,
    UserComponent,
    LoginFormComponent,
    InscriptionFormComponent,
    FooterComponent,
    AlertComponent,
    ModerationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
