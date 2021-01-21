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

  shadowHorizont: string =
    '25px -25px #ce5d56, 20px -20px #ce5d56, 15px -15px #ce5d56, 10px -10px #ce5d56, 5px -5px #ce5d56';
  shadowVertical: string =
    '25px 25px #ce5d56, 20px 20px #ce5d56, 15px 15px #ce5d56, 10px 10px #ce5d56, 5px 5px #ce5d56';

  constructor() {}

  ngOnInit(): void {}
}
