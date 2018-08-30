import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, AppDeclaration, AppProvider } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import {CustomFormsModule} from 'ng2-validation';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [AppDeclaration],
  providers: [AppProvider, AngularFireAuth, AngularFireDatabase, AngularFireStorage],
  bootstrap: [AppComponent],
})
export class AppModule { }
