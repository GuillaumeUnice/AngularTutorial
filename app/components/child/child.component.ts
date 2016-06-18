import {Component, OnInit, Host, Optional} from '@angular/core';
 
import {MyService} from '../../services/my-service/my-service.service';

@Component({
  selector: 'child',
  templateUrl: 'app/components/child/child.component.html',
  styleUrls: ['app/components/child/child.component.css'],
  providers: []

})
export class ChildComponent implements OnInit {
  
  constructor(
    @Host()
    private _myService : MyService
  ){}

  ngOnInit() {
    console.log(this._myService.varService);
  }
  
  childFunction() {
    console.log(this._myService.varService);
  }

}
