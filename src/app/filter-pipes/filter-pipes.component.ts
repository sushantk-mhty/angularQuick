import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.scss']
})
export class FilterPipesComponent {
  constructor(private msgService:DesignutilityService){}
  Loremipsum:string="";
  nameSearch: string="";
  productArr=[{}];
  ngOnInit(){
    this.Loremipsum=this.msgService.Loremipsum;
    this.productArr=this.msgService.ProductTable;
  }
  onAddProduct(addItem:any,price:any){
    this.productArr.push({
      sno:5, name:addItem.value, price: price.value + ' Rs',availability:'Available'
    })
}


}
