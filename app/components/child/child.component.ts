import {Component, Input} from '@angular/core';
 
 @Component({
   selector: 'child',
   templateUrl: 'app/components/child/child.component.html',
   styleUrls: ['app/components/child/child.component.css'],
   providers: []
 
 })
 export class ChildComponent {
   constructor(){}
 
   @Input('myAliasInputChild') myInputChild : string;
 
 }
