import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-customer-password-reset',
 templateUrl: './customer-password-reset.component.html',
  styleUrls: ['./customer-password-reset.component.css']
})
export class CustomerPasswordResetComponent implements OnInit {
public customerid;
public myForm;
  constructor(private router:Router, myformBuilder: FormBuilder, private service: MyServiceService ) { 
this.customerid = this.router.getCurrentNavigation().extras.state.id;
this.myForm = myformBuilder.group({
  password: ['', Validators.required]
})
  }

  ngOnInit(): void {
    console.log("customer id", this.customerid)
  }

  changePassword(){

    this.service.changeCustomersPassword(this.customerid, this.myForm.value.password).subscribe(data=>{
      console.log('from chengePassword', data);
    })

  }

}
