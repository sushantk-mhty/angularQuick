import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.scss']
})
export class TelevisionComponent {
  constructor(private _location: Location) {}
  backClicked() {
    this._location.back();
  }
}
