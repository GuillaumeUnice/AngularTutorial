import {Component, OnInit} from '@angular/core';

import {MyService} from '../../services/my-service/my-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'connect',
  templateUrl: 'app/components/connect/connect.component.html',
  styleUrls: ['app/components/connect/connect.component.css'],
  providers: []

})
export class ConnectComponent implements OnInit {
  
  private _isAuthenticated: boolean;
  public user: User =  new User('','');

  constructor(
    private _myService : MyService
  ){}

  ngOnInit() {
    this._myService.pseudo$.subscribe(
      res => {
        if(res) {
          this._isAuthenticated = true;
          this.user.pseudo = res;
        } else {
          this._isAuthenticated = false;
          this.user.pseudo = null;       
        }
      }
    )
  }

  public login(value: User): void {
    event.preventDefault();
    this._myService.login(value.pseudo, value.password);
    this.user.password = '';
    this.user.pseudo = '';
    this._isAuthenticated = true;
    event.stopPropagation();
}

}
