import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
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
