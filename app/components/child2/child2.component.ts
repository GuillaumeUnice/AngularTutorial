import {Component, OnInit} from '@angular/core';

import {MyService} from '../../services/my-service/my-service.service';

@Component({
  selector: 'child2',
  template: '<span>Child 2 Component</span><ng-content></ng-content>',
  providers: [MyService]
})
export class Child2Component {
  constructor(
    private _myService : MyService
  ){}

}