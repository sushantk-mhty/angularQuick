import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { Comp6Component } from '../comp6/comp6.component';
declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit,AfterViewInit {
  boxMessage:string="";
  userName:string = "Sushant";
  @ViewChild('box') box !:ElementRef;
  @ViewChild(Comp6Component) child !:Comp6Component;
  constructor(private _designServices:DesignutilityService, private renderer: Renderer2){}

  ngOnInit(){
    this.boxMessage=this._designServices.Loremipsum;
  }
  ngAfterViewInit(): void {
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor='blue';
    // this.box.nativeElement.classList='boxblue';
    this.renderer.setStyle(this.box.nativeElement,'backgroundColor','green');
    this.renderer.setStyle(this.box.nativeElement,'color','white');
    this.renderer.addClass(this.box.nativeElement,'boxblue');
    this.renderer.setAttribute(this.box.nativeElement,'title','this is test title');
    console.log(this.child);
  }
  changeChildProperty(){
     this.child.userName ="Uxtrendz";
  }
  callChildMethod(){
    this.child.clickMe()
  }

  // @HostListener('click') myClick(){
  //    alert('Clicked');
  // }
  //  @HostListener('window:scroll',['$event']) myScroll(){
  //   console.log('Scrolling')
  // }
}
