import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { UserModule } from './user/user.module';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    JsonpModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
