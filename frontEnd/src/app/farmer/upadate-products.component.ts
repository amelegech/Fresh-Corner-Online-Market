import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators,FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-upadate-products',
  templateUrl: './upadate-products.component.html',
  styleUrls: [ './upadate-products.component.css']
})
export class UpadateProductsComponent implements OnInit {
  public myForm: FormGroup;
  public prodInfo;
  public needToEdit;
  public toDelete;
  constructor( private myFormBuilder: FormBuilder, private service: MyServiceService, private http: HttpClient, private router: Router) {
     this.prodInfo = this.router.getCurrentNavigation().extras.state.prod;
     console.log( 'Information pulled from list component', this.prodInfo);
     console.log('single prod id', this.prodInfo._id);

     this.myForm = myFormBuilder.group({
          prodName: [this.prodInfo.prodName, Validators.required],
          price: [this.prodInfo.price, Validators.required],
          prodInfo : [this.prodInfo.prodInfo, Validators.required],
        });
  }

  OnSubmitUpdate(){
    this.service.updateProducts(this.prodInfo._id, this.myForm.value).subscribe((edit)=>{
      this.needToEdit = edit;
      console.log('Information need to Edit', this.needToEdit)
    })

    setTimeout(() => {
      this.router.navigate(['farmers', 'Products_List']);
    }, 1000);
   };
 
   

  ngOnInit(): void {
  }

}
