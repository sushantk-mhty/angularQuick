import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  proSelected:boolean=false;
  selProduct:string="";
  addedProduct:any;
  onSelectProduct(prodName:string){
      this.proSelected=true;
      this.selProduct=prodName;
  }
  onAddedProduct(proData:string){
     this.addedProduct=proData;
  }
  
}
