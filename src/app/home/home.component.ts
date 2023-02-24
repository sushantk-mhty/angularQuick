import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _designServices:DesignutilityService){
    this._designServices.userName.subscribe(uname =>{
      this.userName=uname
    })
  }
  statusOnLine:boolean=true;
  products=[
    {name:'Laptop'},
    {name:'Mobile'},
    {name:'Television'},
    {name:'Washing Machine'}
  ];
  userName:string = "Sushant";
}
