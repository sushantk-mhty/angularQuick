import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { TxtseconeComponent } from './myContainer/txtsecone/txtsecone.component';
import { TxtsectwoComponent } from './myContainer/txtsectwo/txtsectwo.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TwoWayComponent } from './databind/two-way/two-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ngx-bootstrap
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgifComponent } from './ngif/ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//Http
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { DesignutilityService } from './appServices/designutility.service';
import { Card3Component } from './card3/card3.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { BlogsComponent } from './blogs/blogs.component';
import { Comp5Component } from './comp5/comp5.component';
import { ContentComponent } from './content/content.component';
import { Comp6Component } from './comp6/comp6.component';
import { TestdirectiveDirective } from './appDirectives/testdirective.directive';
import { EventsComponent } from './events/events.component';
import { UxPipe } from './appPipes/ux.pipe';
import { FilterPipe } from './appPipes/filter.pipe';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DesignUtilityModule } from './appModules/design-utility.module';



@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
   TxtseconeComponent,
    TxtsectwoComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    BlogsComponent,
    Comp5Component,
    ContentComponent,
    Comp6Component,
    TestdirectiveDirective,
    EventsComponent,
    UxPipe,
    FilterPipe,
    FilterPipesComponent,
    TempDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DesignUtilityModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App module loaded')
  }
}
