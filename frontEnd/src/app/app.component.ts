import { Component } from '@angular/core';
import {MyServiceService} from './my-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myToken;
  constructor(private service:MyServiceService ){}

  myLogout(){
   this.myToken = this.service.logout()
   console.log("You are Loggedout!");
  alert('You Are Logged Out! Thanks For Being our Farem Memeber ship!');
   
  }
}
