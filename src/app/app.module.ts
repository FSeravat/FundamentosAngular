import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteExemploServicos1Component } from './componente-exemplo-servicos1/componente-exemplo-servicos1.component';
import { ComponenteExemploServicos2Component } from './componente-exemplo-servicos2/componente-exemplo-servicos2.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { MultiplicadorPipe } from './multiplicador.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { PrimeiroComponentComponent } from './primeiroComponente/primeiroComponente.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    SegundoComponenteComponent,
    MultiplicadorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ComponenteExemploServicos1Component,
    ComponenteExemploServicos2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
