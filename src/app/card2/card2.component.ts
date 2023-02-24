import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component {

   constructor(private _msgService:DesignutilityService){}
   product:string="";
  ngOnInit(){
    this.product=this._msgService.product.name;
  }
  btnClickMessage(){
   this._msgService.messageAlert();
  }
}
