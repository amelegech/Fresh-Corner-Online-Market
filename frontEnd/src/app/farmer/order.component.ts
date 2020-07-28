import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: [ './order.component.css']
})
export class OrderComponent implements OnInit {
  public myForm;
  public allOrders;
  constructor(
    myformBuilder: FormBuilder,
    private service: MyServiceService,
    private http: HttpClient,
    private router: Router
  ) {
    // this.myForm = myformBuilder.group({
    //   ProdList: ['', Validators.required],
    //   totalPrice: ['', Validators.required],
    //   customer: ['', Validators.required],
    //   farmer: ['', Validators.required]
    // });
  }
// onStatusSubmit(){
//   this.service.orderStatus(this.myForm.value).subscribe((ord)=>{
//     console.log("order content", ord)
// })
  
// }
  ngOnInit(): void {
    this.service.getOrders().subscribe(data=>{
      this.allOrders = data;
      console.log("Orders list ",this.allOrders);
    })
  }
}
