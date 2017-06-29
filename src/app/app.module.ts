import { CoreModule } from 'app/core/core.module';
import { SharedModule } from 'app/shared/shared.module';
import { Shared2Module } from 'app/shared2/shared2.module';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    Shared2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
