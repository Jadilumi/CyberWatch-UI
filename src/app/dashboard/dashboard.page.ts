import { Component, OnInit } from '@angular/core';
import { single, multi, genderCrimeData, allData } from '../components/data';

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
  blocos!: string[];
  globalTotal!: number;

  constructor() {
    this.countries = ['Bloco A', 'Bloco B', 'Bloco C'];
    this.selectedCountry = 'Todos';
  }

  ngOnInit() {
    this.updateChartData();
  }

  updateChartData() {
    if (this.selectedCountry === 'Todos') {
      console.log('Entrando no modo "Todos"');
      this.barChartData = this.aggregateBullyingByBloco(allData);
      this.pieChartData = single;
      this.horizontalBarChartData = single;
      this.lineChartData = multi;
      this.genderPieChartData = this.aggregateBullyingTypeData(allData);
    } else {
      console.log('Entrando no modo selecionado:', this.selectedCountry);
      this.globalTotal = 0;

      const blocoData = allData.filter(item => item.estado === this.selectedCountry);
      this.barChartData = this.aggregateBullyingByBloco(blocoData);


      this.horizontalBarChartData = this.filterDataByCountry(allData, this.selectedCountry);
      this.lineChartData = this.filterMultiDataByCountry(allData, this.selectedCountry);
      this.genderPieChartData = this.filterBullyingDataByLocal(allData, this.selectedCountry);
    }

    console.log('Dados atualizados para gráfico de pizza:', this.genderPieChartData);
    this.germanyTotal = this.calculateGlobalTotal();
  }


  filterDataByCountry(data: any[], bloco: string): any[] {
    return data.filter(item => item.estado === bloco);
  }

  filterMultiDataByCountry(data: any[], country: string): any[] {
    return data.filter(item => item.name === country);
  }

  filterBullyingDataByLocal(data: any[], bloco: string): any[] {
    const filteredData = data.filter(item => item.estado === bloco);
    console.log('Filtrando tipos de bullying pelo local', bloco, ':', filteredData);
    const result = this.aggregateBullyingTypeData(filteredData);
    console.log('Resultado agregado para tipos de bullying no bloco', bloco, ':', result);
    return result;
  }

  calculateGlobalTotal(): number {
    return this.lineChartData.reduce((total, countryData) => {
      return total + countryData.series.reduce((countryTotal: any, item: { value: any; }) => countryTotal + item.value, 0);
    }, 0);
  }

  calculateTotal(bloco: string): number {
    const blocoData = this.lineChartData.find(data => data.name === bloco);
    return blocoData ? blocoData.series.reduce((total: any, item: { value: any; }) => total + item.value, 0) : 0;
  }

  // Gráfico de pizza por Gênero
  aggregateBullyingTypeData(data: any[]): any[] {
    const aggregatedData: { [key: string]: number } = {
      "Físico": 0,
      "Verbal": 0,
      "Virtual": 0,
      "Social": 0
    };
    data.forEach(entry => {
      if (entry.tipoBullying in aggregatedData) {
        aggregatedData[entry.tipoBullying]++;
      } else {
        console.error("Entrada de daados invalida aquiii!!!", entry);

      }
    });

    const result = Object.keys(aggregatedData).map(key => ({
      name: key,
      value: aggregatedData[key]
    }));
    console.log("Entrando nos dados de aggregateBullyingTypeData", result);
    return result;
  }

  // Gráfico de barras por Bloco
  aggregateBullyingByBloco(data: any[]): any[] {
    const aggregatedDataBloco: { [key: string]: number } = {
      "Bloco A": 0,
      "Bloco B": 0,
      "Bloco C": 0,
    };

    data.forEach(entry => {
      if (aggregatedDataBloco[entry.estado] !== undefined) {
        aggregatedDataBloco[entry.estado]++;
      }
    });

    const result = Object.keys(aggregatedDataBloco).map(key => ({
      name: key,
      value: aggregatedDataBloco[key]
    }));

    return result;
  }

  onSelectBloco(bloco: string){
    this.selectedCountry = bloco;
    this.updateChartData();
  }
}
