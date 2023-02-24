import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomPreloadingService } from './appServices/custom-preloading.service';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { EventsComponent } from './events/events.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';

//routes
const routes:Routes=[
  {path:'',redirectTo: "login",pathMatch:'full'},
 {path:'home',component: HomeComponent},
 {path:'login',component: LoginComponent},
 {path:'about',component: AboutComponent},
 { 
  path: 'products',data:{preload:true},
  loadChildren: () => import('./products/products.module').then(x => x.ProductsModule)
},
 // {path:'contact',component: ContactComponent},
 {path:'contact',children:[
   {path:'',component: ContactComponent},
   {path:'laptop',component: LaptopComponent},
   {path:'mobile',component: MobileComponent},
   {path:'television',component: TelevisionComponent},
   {path:'washingmachine',component: WashingmachineComponent}
 ]},
 {path:'buy-products',component: ParentComponent},
 
 {path:'blogs',component: BlogsComponent},
 {path:'content',component: ContentComponent},
 {path:'events',component: EventsComponent},
 {path:'filter',component: FilterPipesComponent},
 {path:'tdf',component: TempDrivenFormComponent},
 {path:'reactive',component: ReactiveFormComponent},
 {path:'mycontainer',component: MyContainerComponent},
 //{path:'**', component:PageNotFoundComponent}
]

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes,{
    //preloadingStrategy:PreloadAllModules CustomPreloadingService
    preloadingStrategy:CustomPreloadingService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
