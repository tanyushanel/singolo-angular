import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  imgArray: string[] = [
    '../../assets/portfolio-1.png',
    '../../assets/portfolio-2.png',
    '../../assets/portfolio-3.png',
    '../../assets/portfolio-4.png',
    '../../assets/portfolio-5.png',
    '../../assets/portfolio-6.png',
    '../../assets/portfolio-7.png',
    '../../assets/portfolio-8.png',
    '../../assets/portfolio-9.png',
    '../../assets/portfolio-10.png',
    '../../assets/portfolio-11.png',
    '../../assets/portfolio-12.png',
  ];

  constructor() {
    this.imgArray = this.getFromLocalStore();
  }

  randomizeImg(): void {
    let first = this.imgArray.shift();
    this.imgArray.push(first);
    this.saveToLocalStore();
  }

  saveToLocalStore(): void {
    localStorage.setItem('imgArray', JSON.stringify(this.imgArray));
  }

  getFromLocalStore(): string[] {
    return (this.imgArray = JSON.parse(localStorage.getItem('imgArray')));
  }
}
