import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, 
         MdCardModule, 
         MdMenuModule, 
         MdToolbarModule, 
         MdIconModule, 
         MdSidenavModule, 
         MdProgressBarModule, 
         MdTabsModule,
         MdGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
	  MdSidenavModule,
    MdProgressBarModule,
    MdTabsModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }