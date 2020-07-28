import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { AddProductsComponent } from './add-products.component';
import { UpadateProductsComponent } from './upadate-products.component';
import { ProductListComponent } from './product-list.component';
import { AuthguardGuard } from '../authguard.guard';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { OrderComponent } from './order.component';
import { DeleteComponent } from './delete.component';
import { FarmerListComponent } from './farmer-list.component';
import { CustomerListComponent } from './customer-list.component';
import { StatusComponent } from './status.component';
import { ResetpasswordFarmerComponent } from './resetpassword-farmer.component';
import { CustomerPasswordResetComponent } from './customer-password-reset.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent, 
    AddProductsComponent,
    UpadateProductsComponent, 
    ProductListComponent, 
    OrderComponent, 
    DeleteComponent,
     FarmerListComponent,
     CustomerListComponent,
     StatusComponent,
     ResetpasswordFarmerComponent,
     CustomerPasswordResetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'add_Products', component: AddProductsComponent,canActivate:[AuthguardGuard]},
      {path: 'Products_List', component: ProductListComponent,canActivate:[AuthguardGuard]},
      {path: 'update_Product', component: UpadateProductsComponent},
      {path: 'delete_Product', component: DeleteComponent},
      {path: 'orders', component: OrderComponent},
      {path: 'status', component: StatusComponent},
      {path: 'farmLists', component: FarmerListComponent},
      {path: 'customerLists', component: CustomerListComponent},
      {path: 'farmerpassword', component: ResetpasswordFarmerComponent},
      {path: 'customerpassword', component: CustomerPasswordResetComponent}

    ]),
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [
    SignupComponent,
    LoginComponent,
    AddProductsComponent,
    UpadateProductsComponent,
    ProductListComponent,
    OrderComponent,
    DeleteComponent,
    FarmerListComponent,
    CustomerListComponent,
    StatusComponent,
    ResetpasswordFarmerComponent,
    CustomerPasswordResetComponent
  ]
})
export class FarmerModule { }
