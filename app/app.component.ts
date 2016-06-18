import { Component } from '@angular/core';

import {ChildComponent} from './components/child/child.component';
 
 @Component({
   selector: 'my-app',
   templateUrl: './app/app.component.html',
   styleUrls: ['./app/app.component.css'],
   providers: [],
   directives: [ChildComponent]
 })
 export class AppComponent {
 	parentVar : string = "myParentVar";
   	constructor(){}
 
 }
