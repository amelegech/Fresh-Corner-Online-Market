import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MyServiceService} from '../my-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent implements OnInit {
 public myForm;
  constructor( private myformBuilder: FormBuilder, private service: MyServiceService, private http: HttpClient, private router: Router) { 
   this.myForm = myformBuilder.group({
    email: ['', Validators.required],
     password: ['', Validators.required]
   });
  }
  onLoginSubmit(){

    this.service.loginFarmer(this.myForm.value).subscribe((res: any) =>{
      if(res.success == true){
        this.service.storeToken(res.token);
        this.router.navigate(['farmers', 'Products_List']);
      }
    })

  }
  ngOnInit(): void {
  }

}
