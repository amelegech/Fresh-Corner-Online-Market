import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as _ from 'lodash'; 

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  public token;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }
  signUpFarmer(myForm) {
    const farmName = myForm.farmName;
    const email = myForm.email;
    const password = myForm.password;
    return this.http.post('http://localhost:2020/farmers/signup', {
      farmName,
      email,
      password,
    });
  }

  loginFarmer(myForm) {
    const email = myForm.email;
    const password = myForm.password;
    return this.http.post('http://localhost:2020/farmers/login', {
      email,
      password,
    });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

  // Stor The Token

  storeToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  addproducts(myFormData) {
    return this.http.post(
      'http://localhost:2020/farmers/products', myFormData ,
      {
        headers: { Authorization: 'Bearer ' + this.token },
      }
    );
  }
  getProductList() {
    return this.http.get(`http://localhost:2020/farmers/products`, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
  updateProducts(products_id: any, body: any) {
    return this.http.patch(
      `http://localhost:2020/farmers/products/${products_id}`,
      body,
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }
  deleteProducts(products_id: any) {
    return this.http.delete(
      `http://localhost:2020/farmers/products/${products_id}`,
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }
  getOrders() {
    return this.http.get('http://localhost:2020/farmers/orders', {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
  statusUpdate(orderid:any, status:any) {
    return this.http.patch(
      `http://localhost:2020/farmers/orders/${orderid}`,
      {status:status},
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }
  getFarmerList() {
    return this.http.get(`http://localhost:2020/farmers/farmlists`, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
  getCustomersList() {
    return this.http.get(`http://localhost:2020/customers/customerlist`, {
      headers: { Authorization: 'Bearer ' + this.token },
    });
  }
changefarmerStatus(farmerid,status){
  return this.http.patch(`http://localhost:2020/farmers/activates/${farmerid}`,{status:status}, {
    headers: { Authorization: 'Bearer ' + this.token },
  })
}
changeFarmerPassword(farmerid,password){
  return this.http.patch(`http://localhost:2020/farmers/password/${farmerid}`,{password:password}, {
    headers: { Authorization: 'Bearer ' + this.token },
  })
 
}

customerStatusChange(customerid, status){
  return this.http.patch(`http://localhost:2020/customers/active/${customerid}`,{ status:status}, {
    headers: { Authorization: 'Bearer ' + this.token },
  }).pipe(map((data) => _.values(data)))
}
changeCustomersPassword(customerid, password){
  return this.http.patch(`http://localhost:2020/customers/password/${customerid}`,{password:password}, {
    headers: { Authorization: 'Bearer ' + this.token },
  })

}

}
