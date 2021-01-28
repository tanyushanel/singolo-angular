import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isSmallScreen: boolean = true;
  isClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  // switchMiniMenu(): void {
  //   this.isSmallScreen = true;
  // }

  openMenu(): void {
    this.isClicked = !this.isClicked;
  }
}
