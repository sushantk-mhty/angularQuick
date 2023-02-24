import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  constructor(private msgService:DesignutilityService){}

  Loremipsum:string="";
  value='This is test value';
  nameSearch: string="";
  date=new Date();
  ngOnInit(){
    this.Loremipsum=this.msgService.Loremipsum;
  }
  nameArr=[
    'Olivia Wilde',
    'Reese Witherspoon',
    'Bruno Mars',
    'Gigi Hadid',
    'Katy Perry',
    'Natalie Portman',
    'Joaquin Phoenix',
    'Kit',
    'Julianne Moore',
    'Meghan Markle',
    'Prince Harry'
  ]
 

}
