import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TelevisionComponent } from './television/television.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';

const proRoutes:Routes =[
{path:'', component:ProductsComponent, children:[
  {path:'laptop',component: LaptopComponent},
  {path:'mobile',component: MobileComponent},
  {path:'television',component: TelevisionComponent},
  {path:'washingmachine',component: WashingmachineComponent},
]}
]


@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingmachineComponent,
  ],
  imports: [
    CommonModule,
   RouterModule.forChild(proRoutes)
  ],
  exports:[]
})
export class ProductsModule { 
  constructor(){
    console.log('Products module loaded')
  }
}
