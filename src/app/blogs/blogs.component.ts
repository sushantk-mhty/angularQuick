import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  value:string="uxtrendz";
  comp5Exist:boolean=true;
  submitValue(val:any){
     this.value=val.value;
  }
  btnDestroy(){
    this.comp5Exist=false;
  }

}
