import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
    navLinks: any[] = [ 
      {label: 'HOME',     link: '/'},
      {label: 'PROJECTS', link: '/projects'},
      {label: 'PERSONAL', link: '/personal'},
      {label: 'CONTACT',  link: '/contact'}
    ];

    tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
 }
