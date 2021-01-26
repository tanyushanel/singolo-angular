import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {
  @Input() isHorizontal: boolean = false;
  imgHorizont: string = '../../../../assets/phone-hor-display.png';
  imgVertical: string = '../../../../assets/phone-vertical-display.png';

  isOrig: boolean = true;

  isOn: boolean = true;

  shadowHorizont: string =
    '25px -25px rgba(0,0,0,0.1), 20px -20px rgba(0,0,0,0.1), 15px -15px rgba(0,0,0,0.1), 10px -10px rgba(0,0,0,0.1), 5px -5px rgba(0,0,0,0.1)';
  shadowVertical: string =
    '25px 25px rgba(0,0,0,0.1), 20px 20px rgba(0,0,0,0.1), 15px 15px rgba(0,0,0,0.1), 10px 10px rgba(0,0,0,0.1), 5px 5px rgba(0,0,0,0.1)';

  constructor() {}

  ngOnInit(): void {}

  shuffle(event): void {
    this.isOrig = !this.isOrig;
  }

  switchOnOff(event): void {
    this.isOn = !this.isOn;
  }
}
