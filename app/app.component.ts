import {Component, OnInit} from '@angular/core';

import {ChildComponent} from './components/child/child.component';
import {MyService} from './services/my-service/my-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [MyService],
  directives: [ChildComponent]
})
export class AppComponent implements OnInit {
  
  constructor(private _myService : MyService){}
 
  ngOnInit() {
    console.log(this._myService.varService);
  }

  parentFunction() {
    this._myService.changeVarService();
 	}

}
