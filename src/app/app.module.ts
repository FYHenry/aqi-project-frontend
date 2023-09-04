import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BookmarksComponent } from './components/map/bookmarks/bookmarks.component';
import { HistoryComponent } from './components/map/history/history.component';
import { ForumComponent } from './components/forum/forum.component';
import { BackOfficeComponent } from './components/back-office/back-office.component';
import { UserComponent } from './components/user/user.component';
import { LoginFormComponent } from './components/user/login-form/login-form.component';
import { InscriptionFormComponent } from './components/user/inscription-form/inscription-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/back-office/alert/alert.component';
import { ModerationComponent } from './components/back-office/moderation/moderation.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/forum/home/home.component';
import { TopicComponent } from './components/forum/topic/topic.component';
import { ThreadComponent } from './components/forum/thread/thread.component';
import { ProfilComponent } from './components/user/profil/profil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BookmarksComponent,
    HistoryComponent,
    ForumComponent,
    BackOfficeComponent,
    UserComponent,
    LoginFormComponent,
    InscriptionFormComponent,
    FooterComponent,
    AlertComponent,
    ModerationComponent,
    HeaderComponent,
    HomeComponent,
    TopicComponent,
    ThreadComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
