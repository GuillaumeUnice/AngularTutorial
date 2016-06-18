import {Component, Input, OnChanges, SimpleChange, Output, EventEmitter} from '@angular/core';
 
@Component({
  selector: 'child',
  templateUrl: 'app/components/child/child.component.html',
  styleUrls: ['app/components/child/child.component.css'],
  providers: []

})
export class ChildComponent implements OnChanges {
  constructor(){}

  // Input communication
  @Input('myAliasInputChild') myInputChild : string;
  
  //Changement I/O Child Component
  public changeLog: string[] = [];
  ngOnChanges(changes : {[propKey : string] : SimpleChange}) {
    for(let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to = JSON.stringify(changedProp.currentValue);
      this.changeLog.push(`${propName} from ${from} to ${to}`);
    }
  }
  
  // Output communication
  @Output() myOutputChild = new EventEmitter<string>(); 
  myChildFunc() {
    this.myOutputChild.emit("myOutputChildValue");
  }
   
  // local variable
  public childVar : string = "myChildVar";
  updateMyChildVar() {
    this.childVar = "myNewChildVar";
  }
  
  //parent inject child
  public childVarInject: string = "childVarInject";

}
