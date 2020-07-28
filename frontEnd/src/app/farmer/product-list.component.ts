import { Component, OnInit } from '@angular/core';
import{MyServiceService} from '../my-service.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProviderAstType, identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css']
})
export class ProductListComponent implements OnInit {
 public allProducts$;

 
  constructor(private service: MyServiceService,  private router : Router ) { }
  

  ngOnInit(): void {
    this.service.getProductList().subscribe((prod) =>{
      console.log(prod);
      this.allProducts$ = prod;
    })
  }
  }


//delete 
/*OnSubmitDelete(){
    this.service.deleteProducts(this.prod_id).subscribe((del)=>{  
      console.log('deleted id', this.prod_id)
     this.toDelete = del;
      console.log('Product Deleted');

    });*/ 

 