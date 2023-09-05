import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLeerComponent } from './usuario-leer.component';

describe('UsuarioLeerComponent', () => {
  let component: UsuarioLeerComponent;
  let fixture: ComponentFixture<UsuarioLeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioLeerComponent]
    });
    fixture = TestBed.createComponent(UsuarioLeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});