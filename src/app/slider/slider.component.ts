import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  width: string = '100%';
  shiftImg(): void {
    setTimeout(() => {});
  }

  constructor() {}

  ngOnInit(): void {}
}
