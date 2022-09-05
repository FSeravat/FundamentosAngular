import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteExemploServicos2Component } from './componente-exemplo-servicos2.component';

describe('ComponenteExemploServicos2Component', () => {
  let component: ComponenteExemploServicos2Component;
  let fixture: ComponentFixture<ComponenteExemploServicos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteExemploServicos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteExemploServicos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
