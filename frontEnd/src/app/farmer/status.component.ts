import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: [ './status.component.css']
})
export class StatusComponent implements OnInit {
public orderInfo;
public myForm;
  constructor(private myFormBuilder: FormBuilder, private service: MyServiceService, private router: Router) {
    this.orderInfo = this.router.getCurrentNavigation().extras.state.status;
     console.log( ' OrderInformation pulled from Order component', this.orderInfo);
     console.log('single Order id', this.orderInfo._id);
     this.myForm = myFormBuilder.group({
      status: [this.orderInfo.status, Validators.required],
      ProdList: [this.orderInfo.ProdList, Validators.required],
      totalPrice : [this.orderInfo.totalPrice, Validators.required],
    });
   }
   changeStatus(){
    this.service.statusUpdate(this.orderInfo._id, this.myForm.value.status).subscribe((status)=>{
      this.orderInfo = status;
      console.log('after status Change', this.orderInfo)
    })

    setTimeout(() => {
      this.router.navigate(['farmers', 'orders']);
    }, 1000);
   };

  ngOnInit(): void {
  }

}
