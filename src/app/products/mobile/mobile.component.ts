import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  constructor(private _location: Location) {}
  backClicked() {
    this._location.back();
  }

}
