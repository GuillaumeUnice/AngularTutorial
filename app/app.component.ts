import {Component, OnInit} from '@angular/core';

import {ConnectComponent} from './components/connect/connect.component';
import {MyService} from './services/my-service/my-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [MyService],
  directives: [ConnectComponent]
})
export class AppComponent implements OnInit {
  public data: string = 'No data';

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

}
