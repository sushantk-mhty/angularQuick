import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
  constructor(private router:Router){}
  
  products=[
    {proimg:'../../assets/images/laptop.jpg',id:'pro01', name:'Laptop',price:15000 },
    {proimg:'../../assets/images/mobile.jpg',id:'pro02', name:'Mobile',price:45000 },
    {proimg:'../../assets/images/television.jpg',id:'pro03', name:'TV',price:25000 },
    {proimg:'../../assets/images/washing-machine.jpg',id:'pro04', name:'Washing Machine',price:35000 }
  ]

  users:any=[];
  
  
  btnCreateUser(uname:any){
    this.users.push({
      name:uname.value
    });
    if(this.users.length>3){
      this.router.navigate(['products']);
    }
  }
  btnRemoveUser(){
    this.users.splice(this.users.length - 1);
  }
  onRemoveItem(item:any){
    this.users.splice(item,1);
  }
  btnRemoveProduct(item:any){
    this.products.splice(item,1);
  }
}
