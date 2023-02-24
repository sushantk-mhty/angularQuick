import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { 
    //this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow')
  }
  changeBg(color:string){
     //this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color);
  }
  @HostBinding('style.backgroundColor') bgColor:any ='green'
  @HostBinding('class.myClass') className:any
  @HostBinding('attr.title') myTitle:any
  @HostListener('click') myClick(){
   //this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue')
   this.bgColor='blue';
   this.className=true;
   this.myTitle='this is Host Bind title';  
  }
  @HostListener('mouseover') myMouseOver(){
    //this.renderer.setStyle(this.el.nativeElement,'backgroundColor','lightgray')
  }
  @HostListener('mouseout') myMouseOut(){
    //this.renderer.setStyle(this.el.nativeElement,'backgroundColor','white')
  }
}
