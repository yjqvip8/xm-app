import { Component, OnInit } from '@angular/core';
import { TestService, Msg } from "../services/test.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private testService:TestService) {}
  weatherByNow:string;
  ngOnInit() {
    let msg:Msg = { msg: "this is a msg"};
    console.log(msg);
    console.log(this.testService.msg)
    this.testService.getWeather().subscribe(res=>{
      if(res.desc == "OK"){
        let data = res.data.forecast[0];
        this.weatherByNow = `${data.date}\n${data.high}\/${data.low}`;
      }
    })
  }
}
