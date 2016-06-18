import {Component, Input, OnChanges, SimpleChange, Output, EventEmitter} from '@angular/core';
 
@Component({
  selector: 'child',
  templateUrl: 'app/components/child/child.component.html',
  styleUrls: ['app/components/child/child.component.css'],
  providers: []

})
export class ChildComponent implements OnChanges {
  constructor(){}

  public changeLog: string[] = [];
  @Input('myAliasInputChild') myInputChild : string;
  
  ngOnChanges(changes : {[propKey : string] : SimpleChange}) {
    for(let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to = JSON.stringify(changedProp.currentValue);
      this.changeLog.push(`${propName} from ${from} to ${to}`);
    }
  }
  
  @Output() myOutputChild = new EventEmitter<string>(); 
  
  myChildFunc() {
    this.myOutputChild.emit("myOutputChildValue");
  }
}
