import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

// import { AlertComponent } from './_directives/index';
import { LoginGuard } from './_guards/index';
import { LoginService, NoteService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { NoteComponent } from './note/note.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        NoteComponent
    ],
    providers: [
        LoginGuard,
        LoginService,
        NoteService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
