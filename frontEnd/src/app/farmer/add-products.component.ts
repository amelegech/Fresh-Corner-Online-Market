import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: [ './add-products.component.css']
})
export class AddProductsComponent implements OnInit {
 public myForm;
public myImage;
  constructor(private myformBuilder: FormBuilder,
              private service: MyServiceService, 
              private http: HttpClient, 
              private router: Router) {
    this.myForm = myformBuilder.group({
        farmName: ['', Validators.required],
        image: ['', Validators.required],
          prodName: ['', Validators.required],
          price: ['', Validators.required],
          prodInfo : ['', Validators.required], 
   });
   }
   AddProductOnSubmit(){
     const myFormData = new FormData();
     myFormData.append('farmName',this.myForm.get('farmName').value);
     myFormData.append('image',this.myImage);
     myFormData.append('prodName',this.myForm.get('prodName').value);
     myFormData.append('price',this.myForm.get('price').value);
     myFormData.append('prodInfo',this.myForm.get('prodInfo').value);

     console.log('from my Form Data',myFormData)

     this.service.addproducts(myFormData)
     .subscribe((prod)=>{
       console.log('product added', prod);
         this.router.navigate(['farmers', 'Products_List'])
     })
   }
  onchangeImage(event){
    if(event.target.files.length> 0){
      this.myImage = event.target.files[0]

    }
  }
    
    ngOnInit(): void {
    }

}
