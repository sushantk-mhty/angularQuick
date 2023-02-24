import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../appDirectives/dropdown.directive';



@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DropdownDirective
  ]
})
export class DesignUtilityModule {
  constructor(){
    console.log('DesignUtility module loaded')
  }
 }
