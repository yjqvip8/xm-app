import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private http:HttpClient) {}
  getWeather():any{
    return this.http.get("http://wthrcdn.etouch.cn/weather_mini?city=上海");
  }
  msg:string = "hello world !";
}

export interface Msg {
  msg:string;
}