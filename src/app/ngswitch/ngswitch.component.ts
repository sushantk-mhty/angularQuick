import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent {
  selectedProduct:string="";
  getPrductValue(val:any){
     this.selectedProduct=val.target.value;
  }
}
