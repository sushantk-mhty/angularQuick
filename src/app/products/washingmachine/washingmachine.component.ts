import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-washingmachine',
  templateUrl: './washingmachine.component.html',
  styleUrls: ['./washingmachine.component.scss']
})
export class WashingmachineComponent {
  constructor(private _location: Location) {}
  backClicked() {
    this._location.back();
  }
}
