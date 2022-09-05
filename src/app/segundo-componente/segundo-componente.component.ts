import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent {
  nome = 'Felipe';
  dataNascimento = '1995-03-20';
  urlImagem = '/assets/Tavares.jpg';

  mostrarDataNascimento() {
    alert('A data de nascimento de Felipe é: ' + this.dataNascimento);
  }
}
