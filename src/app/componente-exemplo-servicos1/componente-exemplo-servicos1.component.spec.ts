import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteExemploServicos1Component } from './componente-exemplo-servicos1.component';

describe('ComponenteExemploServicos1Component', () => {
  let component: ComponenteExemploServicos1Component;
  let fixture: ComponentFixture<ComponenteExemploServicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteExemploServicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteExemploServicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
