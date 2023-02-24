import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() productSelected:boolean=false;
  @Input() selectedProduct:string="";
  @Output() addedProduct= new EventEmitter<any>(); 
  onAddProduct(){
    this.addedProduct.emit(this.selectedProduct);
  } 
}
