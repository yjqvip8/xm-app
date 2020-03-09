import { Component, OnInit } from '@angular/core';
import { TestService } from "../services/test.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isMsg:string="";
  constructor(private testService:TestService) { 

  }

  ngOnInit() {
    console.log(this.testService.getMsg())
  }

}
