import { firebaseConfig } from './../environments/firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResponsiveModule } from 'ng2-responsive';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FAQComponent } from './faq/faq.component';
import { LovesSarahHopkinsComponent } from './lovessarahhopkins/lovessarahhopkins.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectsComponent } from './projects/projects.component';
import { CVComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

import { CardsService } from './cards.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCardModule, 
         MatMenuModule, 
         MatToolbarModule, 
         MatIconModule, 
         MatSidenavModule, 
         MatProgressSpinnerModule,
         MatProgressBarModule, 
         MatTabsModule,
         MatGridListModule,
         MatTooltipModule,
         MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LovesSarahHopkinsComponent,
    FAQComponent,
    ProjectsComponent,
    PersonalComponent,
    CVComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResponsiveModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
	  MatSidenavModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatGridListModule,
    MatTooltipModule,
    MatListModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }