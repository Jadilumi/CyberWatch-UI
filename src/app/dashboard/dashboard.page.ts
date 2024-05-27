import { Component, OnInit } from '@angular/core';
import { single, multi, genderCrimeData } from '../components/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  barChartData!: any[];
  pieChartData!: any[];
  horizontalBarChartData!: any[];
  lineChartData!: any[];
  genderPieChartData!: any[];
  germanyTotal!: number;
  usaTotal!: number;
  selectedCountry: string;
  countries: string[];
  globalTotal!: number;

  constructor() {
    this.countries = ['Germany', 'USA', 'France'];
    this.selectedCountry = 'Todos';
  }

  ngOnInit() {
    this.updateChartData();
  }

  updateChartData() {
    if (this.selectedCountry === 'Todos') {
      this.barChartData = single;
      this.pieChartData = single;
      this.horizontalBarChartData = single;
      this.lineChartData = multi;
      this.genderPieChartData = this.aggregateGenderData(genderCrimeData);
    } else {
      this.globalTotal = 0;

      this.barChartData = this.filterDataByCountry(single, this.selectedCountry);
      this.pieChartData = this.filterDataByCountry(single, this.selectedCountry);
      this.horizontalBarChartData = this.filterDataByCountry(single, this.selectedCountry);
      this.lineChartData = this.filterMultiDataByCountry(multi, this.selectedCountry);
      this.genderPieChartData = this.filterGenderDataByCountry(genderCrimeData, this.selectedCountry);
    }

    this.germanyTotal = this.calculateTotal('Germany');
    this.usaTotal = this.calculateTotal('USA');
  }

  filterDataByCountry(data: any[], country: string): any[] {
    return data.filter(item => item.name === country);
  }

  filterMultiDataByCountry(data: any[], country: string): any[] {
    return data.filter(item => item.name === country);
  }

  filterGenderDataByCountry(data: any[], country: string): any[] {
    const countryData = data.find(item => item.country === country);
    return countryData ? countryData.data : [];
  }


  calculateGlobalTotal(): number {
    return this.lineChartData.reduce((total, countryData) => {
      return total + countryData.series.reduce((countryTotal: any, item: { value: any; }) => countryTotal + item.value, 0);
    }, 0);
  }


  calculateTotal(country: string): number {
    const countryData = this.lineChartData.find(data => data.name === country);
    return countryData ? countryData.series.reduce((total: any, item: { value: any; }) => total + item.value, 0) : 0;
  }



  //Grafico de pizza por Genero
  aggregateGenderData(data: any[]): any[] {
    const aggregatedData: { [key: string]: number } = { Male: 0, Female: 0 };

    data.forEach(countryData => {
      countryData.data.forEach((genderData: { name: string | number; value: number; }) => {
        if (aggregatedData[genderData.name] !== undefined) {
          aggregatedData[genderData.name] += genderData.value;
        }
      });
    });

    return Object.keys(aggregatedData).map(key => ({
      name: key,
      value: aggregatedData[key]
    }));
  }
}
