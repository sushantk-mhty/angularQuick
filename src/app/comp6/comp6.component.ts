import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestdirectiveDirective } from '../appDirectives/testdirective.directive';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.scss']
})
export class Comp6Component  implements OnInit,AfterContentInit{
  constructor(private renderer:Renderer2){}
  
  
  userName:string="Sushant";
  @ContentChild('childCont') childParagraph !:ElementRef
  @ViewChild(TestdirectiveDirective) myDir !: TestdirectiveDirective
  
  clickMe(){
    alert(this.userName)
    var text=this.renderer.createText(', This text is created by renderer');
    this.renderer.appendChild(this.childParagraph.nativeElement,text);
  }
  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(this.childParagraph)
    this.renderer.setStyle(this.childParagraph.nativeElement,'color','red')
  }
  changeColor(color:any){
     this.myDir.changeBg(color);
  }
}
