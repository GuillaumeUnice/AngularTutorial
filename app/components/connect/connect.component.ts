import {Component, OnInit} from '@angular/core';
import { Headers, RequestOptions, HTTP_PROVIDERS } from '@angular/http';

import {MyService} from '../../services/my-service/my-service.service';

@Component({
  selector: 'connect',
  templateUrl: 'app/components/connect/connect.component.html',
  styleUrls: ['app/components/connect/connect.component.css'],
  providers: []

})
export class ConnectComponent implements OnInit {
  
  private _isAuthenticated: boolean;
  public password: string;
  public pseudo: string;

  constructor(
    private _myService : MyService
  ){}

  ngOnInit() {
    this._myService.pseudo$.subscribe(
      res => {
        if(res) {
          this._isAuthenticated = true;
          this.pseudo = res;
        } else {
          this._isAuthenticated = false;
          this.pseudo = null;       
        }
      }
    )
  }
  
  public login(event: Event): void {
    event.preventDefault();
    this._myService.login(this.pseudo, this.password);
    this.password = null;
    this.pseudo = null;
    this._isAuthenticated = true;
    event.stopPropagation();
}

}
