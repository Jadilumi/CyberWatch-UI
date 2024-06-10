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
  stackedBarChartData: any[];
  totalIncidentes: number = 0;
  totalAbertoIncidentes: number = 0;
  totalFechadoIncidentes: number = 0;
  totalInvestigacaoIncidentes: number = 0;
  //heatmapData: any[];


  selectedState: string = 'Todos';

  states: string[] = ['Bloco A', 'Bloco B', 'Bloco C', 'Todos'];

  constructor() {
    this.barChartData = [];
    this.pieChartData = [];
    this.lineChartData = [];
    this.stackedBarChartData = [];
    // this.heatmapData = [];


  }

  ngOnInit() {
    this.updateChartData();
    this.calcularTotalIncidentes();
    this.calcularStatusDenuncia();
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
    this.stackedBarChartData = this.aggregateIncidentsByStatus(filteredData);
    //this.heatmapData = this.aggregateIncidentsByDayAndHour(filteredData);

  }
  calcularTotalIncidentes() {
    let filteredData = allData;
    if (this.selectedState !== 'Todos') {
      // Filtrar os dados para incluir apenas os do estado selecionado
      filteredData = allData.filter(entry => entry.estado === this.selectedState);
    }
   this.totalIncidentes = filteredData.length;
}

  calcularStatusDenuncia() {
    // Contar a quantidade de incidentes para cada status de denúncia
    allData.forEach(entry => {
      switch (entry.statusDenuncia) {
        case 'Aberta':
          this.totalAbertoIncidentes++;
          break;
        case 'Fechada':
          this.totalFechadoIncidentes++;
          break;
        case 'Investigação':
          this.totalInvestigacaoIncidentes++;
          break;
        default:
          break;
      }
    });
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
        incidentsByMonthAndType[month] = { "Físico": 0, "Verbal": 0, "Virtual": 0, "Social": 0, "PSICOLÓGICO": 0 };
      }
      incidentsByMonthAndType[month][type]++;
    });

    // Prepare data for ngx-charts
    const result: any[] = [];
    const bullyingTypes = ["Físico", "Verbal", "Virtual", "Social", "PSICOLÓGICO"];

    bullyingTypes.forEach(type => {
      const seriesData = Object.keys(incidentsByMonthAndType).map(month => ({
        name: month,
        value: incidentsByMonthAndType[month][type] || 0
      }));
      result.push({ name: type, series: seriesData });
    });

    return result;
  }

  aggregateIncidentsByStatus(data: any[]): any[] {
    const incidentsByStatus: { [key: string]: number } = { "Aberta": 0, "Investigação": 0, "Fechada": 0 };

    data.forEach(entry => {
      const status = entry.statusDenuncia;
      if (status in incidentsByStatus) {
        incidentsByStatus[status]++;
      }
    });

    return Object.keys(incidentsByStatus).map(status => ({
      name: status,
      value: incidentsByStatus[status]
    }));
  }

  /*
  //Metodo para saber os incidentes por dia e hora(grafico de calor)
  aggregateIncidentsByDayAndHour(data: any[]): any[] {
    const incidentsByDayAndHour = {};
    
  
    data.forEach(entry => {
      const date = new Date(entry.dia);
      const day = date.toLocaleString('default', { weekday: 'long' });
      const hour = new Date(`1970-01-01T${entry.hora}`).getHours();
  
      if (!incidentsByDayAndHour[day]) {
        incidentsByDayAndHour[day] = {};
      }
      if (!incidentsByDayAndHour[day][hour]) {
        incidentsByDayAndHour[day][hour] = 0;
      }
      incidentsByDayAndHour[day][hour]++;
    });
  
    const result = Object.keys(incidentsByDayAndHour).map(day => ({
      name: day,
      series: Object.keys(incidentsByDayAndHour[day]).map(hour => ({
        name: hour.toString(),
        value: incidentsByDayAndHour[day][hour]
      }))
    }));
  
    return result;
  }
    */

  // Método para lidar com a seleção de um estado
  onSelectState(state: string) {
    this.selectedState = state;
    this.updateChartData(); // Atualizar os dados do gráfico ao selecionar um estado
    this.calcularTotalIncidentes(); // Recalcular o total de incidentes após a seleção do estado

  }
}
