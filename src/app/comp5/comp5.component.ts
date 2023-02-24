import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy{

  constructor(){
    console.log('constructor called.')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called.');
    clearInterval(this.counter);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called.')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called.')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called.')
  }
  ngDoCheck() {
    console.log('ngDoCheck called.')
  }
 @Input() myValue:string="uxtrendz";

 ngOnChanges(changes:any){
  console.log('ngOnChanges called ' +' ' + changes.myValue.currentValue)
 }
counter:any;
num:number=1;
 ngOnInit(){
  console.log('ngOnInit called.')
  this.counter= setInterval(()=>{
 this.num=this.num+1;
 console.log(this.num);
  },1000)
 }
}
