import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {RondaListComponent} from './ronda-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {RondaService} from '../ronda.service';
import {Ronda} from '../ronda';

describe('RondaListComponent', () => {
  let component: RondaListComponent;
  let fixture: ComponentFixture<RondaListComponent>;
  const rondas: Ronda[] = require('../../../assets/rondas.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ RondaListComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, RondaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of rondas', () => {
    component.rondas = rondas;
    expect(component.rondas.length).toEqual(rondas.length);
});

it('a ronda should be a rondas (first and last)', () => {
    component.rondas = rondas;
    //revisar todos los libros
    expect(component.rondas[0].comentario).toEqual(rondas[0].comentario);
    expect(component.rondas[rondas.length - 1].comentario).toEqual(rondas[rondas.length - 1].comentario);
});

});
