import {Component, OnInit, ViewChild} from '@angular/core';

import {ChildComponent} from './components/child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [],
  directives: [ChildComponent]
})
export class AppComponent implements OnInit {
  
  constructor(){}

  // Input communication
  public parentVar : string = "myParentVar";
  
  //Changement I/O Child Component
  myFunc() {
    this.parentVar = "myNewParentVar";
  }
  
  // Ouput communication
  receiveOutputChildFunc(outputChildValue: string) {
    this.parentVar = outputChildValue;
  }
  
  //parent inject child
  public parentChildVarInject: string;
  @ViewChild(ChildComponent)
  private _childComponent: ChildComponent;

  ngOnInit() {
    //this.parentChildVarInject = this._childComponent.childVarInject;
    setTimeout( () => { this.parentChildVarInject = this._childComponent.childVarInject; }, 0);
  }

}
