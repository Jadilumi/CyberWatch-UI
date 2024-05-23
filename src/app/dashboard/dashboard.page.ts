import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  barChartData: any;
  pieChartData: any;

  constructor() {
    this.barChartData = [
      { "name": "Germany", "value": 8940000 },
      { "name": "USA", "value": 5000000 },
      { "name": "France", "value": 7200000 },
      { "name": "UK", "value": 6200000 }
    ],
  
  this.pieChartData = [
    { "name": "Germany", "value": 30 },
    { "name": "USA", "value": 25 },
    { "name": "France", "value": 20 },
    { "name": "UK", "value": 25 }
  ];
}
}
