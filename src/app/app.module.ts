import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/homeComponent";

import { HttpClientModule } from '@angular/common/http';
import { AdunitService } from "./adunit.service";
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {  Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    FileSelectDirective
  ],
  imports: [
    platformBrowser.BrowserModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule,HttpModule
  ],
  providers: [AdunitService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
