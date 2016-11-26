import {Component, OnInit} from '@angular/core';

import {ConnectComponent} from './components/connect/connect.component';
import {MyService} from './services/my-service/my-service.service';
import { User } from './models/user';
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [MyService]
})
export class AppComponent implements OnInit {
  public data: string = 'No data';
  public version: number = 0;
  public user: User = new User("james", "azerty");

  constructor(private _myService : MyService){}
 
  ngOnInit() {
    this._myService.pseudo$.subscribe(
      res => {
        if(res) {
          this._myService.getInfo().then(data => {
            console.log(data);
            this.data = data;
          });
        }
      }
    )
  }

  updateUserProperty() {
    this.user.pseudo = 'newUser';
  }
  updateUserReference() {
    this.user = new User('newUser', this.user.password);
  }

}
