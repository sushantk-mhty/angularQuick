import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent {
  constructor(private _location: Location) {}
  backClicked() {
    this._location.back();
  }

}
