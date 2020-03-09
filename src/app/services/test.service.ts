import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor() {}
  getMsg():Observable<good>{
    let msg = "is msg";
    return Object(msg)
  }
}

export interface good {
  msg : string
}