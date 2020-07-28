import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-resetpassword-farmer',
  templateUrl: './resetpassword-farmer.component.html',
  styleUrls: [ './resetpassword-farmer.component.css']
})
export class ResetpasswordFarmerComponent implements OnInit {
public farmerid
public myForm
  constructor(private router : Router ,myformBuilder :FormBuilder,private service: MyServiceService ) {
     this.farmerid = this.router.getCurrentNavigation().extras.state.id
     this.myForm = myformBuilder.group({
      password: ['', Validators.required],
       
   })
  }
  ngOnInit(): void {
    console.log( this.farmerid );
  }
  changePassword(){

    this.service.changeFarmerPassword(this.farmerid,this.myForm.value.password).subscribe(data=>{
      console.log(data);
    })

  }

}
