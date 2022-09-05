import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-componente-exemplo-servicos1',
  templateUrl: './componente-exemplo-servicos1.component.html',
  styleUrls: ['./componente-exemplo-servicos1.component.css'],
})
export class ComponenteExemploServicos1Component {
  nome = '';
  constructor(private logger: LoggerService) {}
  adicionarNome() {
    this.logger.logar('O nome ' + this.nome + ' foi adicionado');
  }
}
