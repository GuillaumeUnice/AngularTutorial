import {Component, OnInit, Input, DoCheck, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {MyService} from '../../services/my-service/my-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.component.html',
  styleUrls: ['app/components/about/about.component.css'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AboutComponent implements OnInit {
  
  @Input() version: number;
  @Input() user: User;
  @Input() addItemStream: Observable<any>

  counter: number = 0;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('OnInit AboutComponent');
    this.addItemStream.subscribe(() => {
      this.counter++;
      console.log('MyService AboutComponent', this.counter);
      this.cd.markForCheck();
    })
  }

  ngDoCheck() {
    console.log('DoCheck AboutComponent');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges AboutComponent");
    console.log(changes);
  }

  updateUser() {
    this.user.pseudo = 'newAboutUser';
  }

}
