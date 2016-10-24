import { Component } from '@angular/core';

@Component({
  selector: 'tk-app',
  template: `
    <tk-navbar></tk-navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
