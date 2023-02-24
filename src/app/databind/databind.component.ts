import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.scss']
})
export class DatabindComponent {
  dynName:string="Uxtrendz";

  myMethod(){
    return "My channel name is " + this.dynName;
  }

  appStatus:boolean = true;
  status1:string="Online";
  status2:string="Offline";
}
