import { Injectable } from '@angular/core';

@Injectable({ //means it can be injected as a dependency
  providedIn: 'root'
})
export class LoggerService { //does not depend on another service--does not need a constructor
// be default can be used by anything its ijected into
  log(msg: any) {
    console.log(msg);
  }
  warn(msg: any) {
    console.warn(msg);
  }
  error(msg: any){
    console.error(msg)
  }


  // constructor() { } //not needed
}
