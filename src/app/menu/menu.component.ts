import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public innerWidth: any;

  isSmallScreen: boolean;
  isClicked: boolean;
  isMenuHidden: boolean;

  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth; // init value

    this.isSmallScreen = false;
    this.isClicked = true;
    this.isMenuHidden = false;
    if (this.innerWidth <= 375) {
      this.isSmallScreen = true;
      this.toggleMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: EventTarget): void {
    console.log('RESIZING to ' + window.innerWidth);
    this.innerWidth = window.innerWidth;

    if (this.innerWidth <= 375) {
      this.isSmallScreen = true;
      this.toggleMenu();
    }
  }

  toggleMenu(): void {
    if (this.isSmallScreen) {
      this.isClicked = !this.isClicked;
      this.isClicked ? (this.isMenuHidden = false) : (this.isMenuHidden = true);
    }
  }
}
