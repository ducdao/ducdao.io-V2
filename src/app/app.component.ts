import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
  navLinks: any[] = [ 
    {pageName: 'HOME',              link: '/'},
    {pageName: 'CV' ,               link: '/cv'},
    {pageName: 'PROJECTS',          link: '/projects'},
    {pageName: 'PERSONAL',          link: '/personal'},
    {pageName: 'FAQ',               link: '/faq'}
  ]; 
}
