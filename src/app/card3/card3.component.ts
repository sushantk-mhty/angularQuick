import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component {
  constructor(private _msgService:DesignutilityService){}
  product:any={};
  products:any={};
  ngOnInit(){
    this.product=this._msgService.product;
    //this.products=this._msgService.products;
    this._msgService.products()
    .subscribe(productData=> this.products=productData)
  }
}
