import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, AppDeclaration, AppProvider } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [AppDeclaration],
  providers: [AppProvider, AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
