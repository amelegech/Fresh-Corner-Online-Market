import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css']
})
export class SignupComponent implements OnInit {
  public myForm;
  constructor(private myformBuilder: FormBuilder, private service: MyServiceService, private http: HttpClient, private router: Router) {
    this.myForm = myformBuilder.group({
      farmName: ['', Validators.required],
      email: ['', Validators.required],
       password: ['', Validators.required]
   });
  }
   onSignUpSubmit(){
    this.service.signUpFarmer(this.myForm.value).subscribe((sign)=>{
      console.log(this.myForm.value);
      console.log('Farmer sign up', sign)
    });

    setTimeout(() => {
      this.service.signUpFarmer(this.myForm.value).subscribe((sign)=>{
        console.log('Farmer sign up', sign)
      })
      this.router.navigate(['farmers', 'login']);
    }, 1000);
   }

  ngOnInit(): void {
  }

}
