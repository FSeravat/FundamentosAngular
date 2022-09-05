import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-componente-exemplo-servicos2',
  templateUrl: './componente-exemplo-servicos2.component.html',
  styleUrls: ['./componente-exemplo-servicos2.component.css'],
})
export class ComponenteExemploServicos2Component {
  descricao = '';
  constructor(public logger: LoggerService) {}
}
