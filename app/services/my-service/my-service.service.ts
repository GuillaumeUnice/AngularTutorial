import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
  public varService : string = "varService";
  constructor(){}

  changeVarService() {
    this.varService = "newVarService";
  }
}