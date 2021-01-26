import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  toggler: boolean = true;

  constructor() {}

  shiftImg(): void {
    this.toggler = !this.toggler;
  }

  ngOnInit(): void {}
}
