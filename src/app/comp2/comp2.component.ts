import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  constructor(private _designServices:DesignutilityService){
    this._designServices.userName.subscribe(uname =>{
      this.userName=uname
    })
  }
  userName:any;
  updateUserName(uname:any){
    this._designServices.userName.next(uname.value)
  }
}
