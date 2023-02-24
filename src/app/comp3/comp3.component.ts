import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
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
