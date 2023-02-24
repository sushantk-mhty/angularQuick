import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.scss']
})
export class ClassStyleComponent {
 mypro:boolean=true;
 myStyle1:string="15px";
 isActive:boolean=false;

 mltClasses={
  class1:true,
  class2:true,
  class3:true
 }
 mltStyle={'background':'yellow','border':'10px solid blue'};
} 
