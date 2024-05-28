import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardPage } from './dashboard.page';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { CardComponent } from '../components/card/card.component';
import { HorizontalBarChartComponent } from '../components/horizontal-bar-chart/horizontal-bar-chart.component';
import { LineChartComponent } from '../components/line-chart/line-chart.component';
//Classe onde é alocado todos os tipos de graficos 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, BarChartComponent,PieChartComponent, CardComponent, HorizontalBarChartComponent, LineChartComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DashboardPageModule { }
