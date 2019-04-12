import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Ronda} from './ronda';
import { RondaService } from './ronda.service';
import {AppModule} from '../app.module';

describe('Service: RondaService', () => {
  let injector: TestBed;
    let service: RondaService;
    const rondas: Ronda[] = require('../../assets/rondas.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, RondaService]
    });
        injector = getTestBed();
        service = injector.get(RondaService);
  });

  it('#getrondas should return value from observable',
  (done: DoneFn) => {
  service.getRondas().subscribe(value => {
      expect(value.length).toBeGreaterThan(0);
      done();
      });
  });
  
  it('#createRonda should return value from observable',
  (done: DoneFn) => {
  let ronda:ronda = {id:100,comentario:"prueba", puntaje: 4};
  service.createRonda(ronda).subscribe(value => {
      expect(value.comentario).toEqual(ronda.comentario);
      done();
      });
  });

  it('#getRondaDetail should return an existing ronda',
  (done: DoneFn) => {
  service.getRondaDetail(rondas[0].id).subscribe(value => {
      expect(value.comentario).toEqual(rondas[0].comentario);
      done();
      });
  });

  it('#updateRonda should return the ronda updated',
  (done: DoneFn) => {
let ronda:Ronda = {id:100, comentario:"prueba", puntaje: 3.6};
  service.updateRonda(ronda).subscribe(value => {
      expect(value.comentario).toEqual(ronda.comentario);
      done();
      });
  });
});
