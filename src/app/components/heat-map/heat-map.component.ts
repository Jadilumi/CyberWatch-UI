import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnInit {
  @Input() heatmapData: any;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mês';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Tipo de Bullying';

  constructor() { }

  ngOnInit(): void { }
}
