import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from 'src/app/components/input/input.component'; // Importe corrigido

@NgModule({
  declarations: [
    InputComponent // Declare o InputComponent aqui
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    InputComponent // Exporte o InputComponent aqui
  ]
})
export class InputModule {}
