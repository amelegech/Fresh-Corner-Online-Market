import { Component, OnInit } from '@angular/core';
import{MyServiceService} from '../my-service.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProviderAstType, identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrls: ['./farmer-list.component.css']
})
export class FarmerListComponent implements OnInit {
  public allFarm;
  public allData;
  constructor(private service: MyServiceService,  private router : Router ) { }
 
  
  ngOnInit(): void {
    this.service.getFarmerList().subscribe((farm)=>{
      this.allFarm = farm;
      console.log(" it is from all farmers",this.allFarm);
    })
    
  }

  // onResetPassword(id){

  //   this.router.navigate(['farmers','farmerpassword',{state:[{id:id}]}])

  // }
  onactiveChange(id,status){
  console.log(status);

  this.service.changefarmerStatus(id,status).subscribe(data=>{

    this.allFarm.data = this.allFarm.data.map(item=>{
      if(item._id == id){
        item.active = status
      }
      return item
    })

    console.log('from status change');
    console.log(data);
  })
  
  }
  // onActivate(){
  //   this.service.getFarmerList().subscribe((data)=>{
  //     this.allData = data;
  //     this.allData.status = false;
  //   })
   
  //  }
  

}
