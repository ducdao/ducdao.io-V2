import { HomeComponent } from './home/home.component';
import { CVComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalComponent } from './personal/personal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CVComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'notFound', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/notFound'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}