import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs/Rx'
@Injectable()
export class MyService {
  private _headers = new Headers({'Content-Type': 'application/json'});

  private _token: string;
  private _pseudo: string;
  // Observable string Sources
  private _pseudoSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // Observable string streams
  public pseudo$: Observable<string> = this._pseudoSource.asObservable();

  constructor(private http: Http){
    this._token = localStorage.getItem('token');
    this._pseudo = localStorage.getItem('pseudo');
    this._headers.append('authorization', this._token);
    this._pseudoSource.next(localStorage.getItem('pseudo'));
  }

  public login(pseudo : string, password: string) : void {
    this.http.post('http://localhost:8080/login',
    JSON.stringify({pseudo: pseudo, password: password}),
    {headers: this._headers}
    ).map(res => res.json())
    .subscribe(
      data => {
        console.log(data);
        this._headers = new Headers({
          'Content-Type': 'application/json',
          'authorization': data.token
        });
        this._token = data.token;
        this._pseudo = data.data;
        console.log(data.token);

        this._pseudoSource.next(data.data);
        localStorage.setItem('token', this._token);
        localStorage.setItem('pseudo', this._pseudo);

      },
      err => { console.log(err) }
    );
  }

  public getInfo() : Promise<string> {
    return this.http.get('http://localhost:8080/search',
      {headers: this._headers}
    ).toPromise()
      .then ( data => { return data.json().message; })
      .catch(err => console.log(err) );
  }
}
