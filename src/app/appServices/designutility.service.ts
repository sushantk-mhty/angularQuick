import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }
  messageAlert(){
    alert("Thanks for Subscribe. We will get in touch with you shortly")
  }
  Loremipsum:string='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  // product="Laptop";
  product={name:"Laptop", id: "001"};
  // products=[{}];
  
  // products=[
  //   {name:'Laptop',id:"001"},
  //   {name:'Mobile',id:"002"},
  //   {name:'Television',id:"003"},
  //   {name:'Washing-Machine',id:"004"}
  // ]

  ProductTable=[
    {sno:1, name:'Mobile', price: '7000 Rs',availability:'Available'},
    {sno:2, name:'TV', price: '35000 Rs',availability:'Not Available'},
    {sno:3, name:'Laptop', price: '85000 Rs',availability:'Available'},
    {sno:4, name:'Washing Machine', price: '28000 Rs',availability:'Not Available'},
    {sno:5, name:'Mobile (iPhone)', price: '140000 Rs',availability:'Available'},
    {sno:6, name:'Mobile (Samsung)', price: '70000 Rs',availability:'Available'},
    {sno:7, name:'Mobile (Oneplus)', price: '12000 Rs',availability:'Available'},
    {sno:8, name:'Laptop (mac)', price: '85000 Rs',availability:'Available'},
    {sno:9, name:'Laptop (Dell)', price: '85000 Rs',availability:'Available'},
    {sno:10, name:'Laptop (HP)', price: '85000 Rs',availability:'Available'},
    {sno:11, name:'TV (LG)', price: '55000 Rs',availability:'Available'},
    {sno:12, name:'TV (Samsung)', price: '35000 Rs',availability:'Not Available'},
    {sno:13, name:'Washing Machine (LG)', price: '24000 Rs',availability:'Available'},
    {sno:14, name:'Washing Machine (Samsung)', price: '28000 Rs',availability:'Not Available'}
  ]
  
  url ='https://jsonplaceholder.typicode.com/users';
  products():Observable<any>{
    return this.http.get(this.url)
  }

  //userName = new Subject<any>();
  userName = new BehaviorSubject('Jone Doe');


}
