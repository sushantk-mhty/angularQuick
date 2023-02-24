import { Component} from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component {
  constructor(private _msgService:DesignutilityService){}
  product:string="";
  ngOnInit(){
    this.product=this._msgService.product.name;
  }
  
  btnClickMessage(){
   this._msgService.messageAlert();
  }
}
