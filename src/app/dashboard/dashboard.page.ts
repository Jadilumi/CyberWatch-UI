import { Component, OnInit } from '@angular/core';
import { allData } from '../components/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  pieChartData: any[];
  barChartData: any[];
  lineChartData: any[];
  selectedState: string = 'Todos';

  states: string[] = ['Bloco A', 'Bloco B', 'Bloco C', 'Todos']; 

  constructor() {
    this.barChartData = [];
    this.pieChartData = [];
    this.lineChartData = [];
  }

  ngOnInit() {
    this.updateChartData();
  }

  // Método para atualizar os dados do gráfico
  updateChartData() {
    let filteredData = allData; 
    if (this.selectedState !== 'Todos') {
      // Filtrar os dados para incluir apenas os do estado selecionado
      filteredData = allData.filter(entry => entry.estado === this.selectedState);
    }

    // Processar os dados para obter a distribuição dos tipos de bullying
    this.pieChartData = this.aggregateBullyingTypeData(filteredData);
    this.barChartData = this.aggregateIncidentsByBlock(filteredData);
    this.lineChartData = this.aggregateIncidentsByMonthAndType(filteredData);
  }

  // Método para processar os dados e obter a distribuição dos tipos de bullying
  aggregateBullyingTypeData(data: any[]): any[] {
    const aggregatedData: { [key: string]: number } = {
      "Físico": 0,
      "Verbal": 0,
      "Virtual": 0,
      "Social": 0,
      "PSICOLÓGICO": 0

    };

    // Contar o número de incidentes para cada tipo de bullying
    data.forEach(entry => {
      if (entry.tipoBullying in aggregatedData) {
        aggregatedData[entry.tipoBullying]++;
      } else {
        console.error("Tipo de bullying inválido:", entry.tipoBullying);
      }
    });

    // Converter os dados para o formato esperado pelo gráfico de pizza
    const result = Object.keys(aggregatedData).map(key => ({
      name: key,
      value: aggregatedData[key]
    }));

    return result;
  }

  aggregateIncidentsByBlock(data: any[]): any[] {
    const aggregatedData: { [key: string]: number } = {
      "Bloco A": 0,
      "Bloco B": 0,
      "Bloco C": 0
    };

    // Contar o número de incidentes para cada bloco
    data.forEach(entry => {
      if (entry.estado in aggregatedData) {
        aggregatedData[entry.estado]++;
      }
    });

    // Converter os dados para o formato esperado pelo gráfico de barras
    const result = Object.keys(aggregatedData).map(key => ({
      name: key,
      value: aggregatedData[key]
    }));

    return result;
  }

  aggregateIncidentsByMonthAndType(data: any[]): any[] {
    const incidentsByMonthAndType: { [month: string]: { [type: string]: number } } = {};

    data.forEach(entry => {
      const date = new Date(entry.dia);
      const month = date.toLocaleString('default', { month: 'long' });
      const type = entry.tipoBullying;

      if (!incidentsByMonthAndType[month]) {
        incidentsByMonthAndType[month] = { "Físico": 0, "Verbal": 0, "Virtual": 0, "Social": 0 };
      }
      incidentsByMonthAndType[month][type]++;
    });

    // Prepare data for ngx-charts
    const result: any[] = [];
    const bullyingTypes = ["Físico", "Verbal", "Virtual", "Social", "PSICOLOGICO"];

    bullyingTypes.forEach(type => {
      const seriesData = Object.keys(incidentsByMonthAndType).map(month => ({
        name: month,
        value: incidentsByMonthAndType[month][type] || 0
      }));
      result.push({ name: type, series: seriesData });
    });

    return result;
  }
  // Método para lidar com a seleção de um estado
  onSelectState(state: string) {
    this.selectedState = state;
    this.updateChartData(); // Atualizar os dados do gráfico ao selecionar um estado
  }
}
