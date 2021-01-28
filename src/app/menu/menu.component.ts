import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isSmallScreen: boolean = false;
  isClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openMenu(): void {
    this.isClicked = !this.isClicked;
  }
}
