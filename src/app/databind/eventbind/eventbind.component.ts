import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.scss']
})
export class EventbindComponent {
  msg:string="";
  msgData:string="";
  onAddCart(){
     this.msg="Product Added in Cart";
  }
  onInputClick(event:any){
    console.log(event.target.value);
  }
  onBtnClick(event:any){
    this.msgData=event.target.value + " added to cart";
  }
  getInputInfo(myInput:any){
    console.log(myInput.name);
  }
}
