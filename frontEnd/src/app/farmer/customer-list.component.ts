import { Component, OnInit } from '@angular/core';
import{MyServiceService} from '../my-service.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProviderAstType, identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
public allCustomers;
  constructor(private service: MyServiceService,  private router : Router ) { }

  ngOnInit(): void {
    this.service.getCustomersList().subscribe((custom)=>{
this.allCustomers = custom;
console.log('This is from all Customers', this.allCustomers);

    })
  }

onChangeStatus(id,status){
  console.log("From customer Activate", status);
  console.log("From customer Activate", id);

  this.service.customerStatusChange(id,status).subscribe(data=>{

    this.allCustomers.data = this.allCustomers.data.map(item=>{
      if(item._id == id){
        item.active = status
      }
      return item
    })

    console.log('from status change');
    console.log(data);
  })
  
  }

}
