import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResponsiveModule } from 'ng2-responsive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, 
         MdCardModule, 
         MdMenuModule, 
         MdToolbarModule, 
         MdIconModule, 
         MdSidenavModule, 
         MdProgressSpinnerModule, 
         MdTabsModule,
         MdGridListModule,
         MdTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    PersonalComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResponsiveModule,
    AppRoutingModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
	  MdSidenavModule,
    MdProgressSpinnerModule,
    MdTabsModule,
    MdGridListModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }