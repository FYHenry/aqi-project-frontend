import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BookmarksComponent } from './components/map/bookmarks/bookmarks.component';
import { HistoryComponent } from './components/map/history/history.component';
import { ForumComponent } from './components/forum/forum.component';
import { BackOfficeComponent } from './components/back-office/back-office.component';
import { UserComponent } from './components/user/user.component';
import { SigninFormComponent } from './components/user/signin-form/signin-form.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { ProfilFormComponent } from './components/user/profil-form/profil-form.component';
import { PwdChangeComponent } from './components/user/pwd-change/pwd-change.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/back-office/alert/alert.component';
import { ModerationComponent } from './components/back-office/moderation/moderation.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/forum/home/home.component';
import { TopicComponent } from './components/forum/topic/topic.component';
import { ThreadComponent } from './components/forum/thread/thread.component';

import { FlagsService } from './shared/services/flags.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BookmarksComponent,
    HistoryComponent,
    ForumComponent,
    BackOfficeComponent,
    UserComponent,
    SigninFormComponent,
    RegisterFormComponent,
    ProfilFormComponent,
    PwdChangeComponent,
    FooterComponent,
    AlertComponent,
    ModerationComponent,
    HeaderComponent,
    HomeComponent,
    TopicComponent,
    ThreadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [FlagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
