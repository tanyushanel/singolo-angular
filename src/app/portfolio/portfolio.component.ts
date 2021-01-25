import { PortfolioService } from './portfolio.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  selectedFilter: string = 'All';
  constructor(public portfolioService: PortfolioService) {}

  shuffleImg(filter: string): void {
    this.portfolioService.randomizeImg();
    this.selectedFilter = filter;
  }

  ngOnInit(): void {}
}
