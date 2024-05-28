import {Component} from '@angular/core';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage {


  constructor() {
  }

  alertButtons = [
    {
      text: 'Não',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Sim',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.salvarDenuncia();
      }
    },
  ];


  denunciaData = {
    "genero": "",
    "estado": "",
    "tipoDeBullying": "",
    "relator": "",
    "localDoOcorrido": "",
    "telefone": "",
    "email": "",
    "nomeDaVitima": "",
    "relato": ""
  }

  salvarDenuncia() {
    console.log(this.denunciaData)
  }
}
