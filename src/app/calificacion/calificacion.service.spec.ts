import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Calificacion} from './calificacion';
import { CalificacionService } from './calificacion.service';
import {AppModule} from '../app.module';

describe('Service: CalificacionService', () => {
  let injector: TestBed;
    let service: CalificacionService;
    const calificaciones: Calificacion[] = require('../../assets/calificaciones.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, CalificacionService]
    });
        injector = getTestBed();
        service = injector.get(CalificacionService);
  });

  it('#getCalificaciones should return value from observable',
  (done: DoneFn) => {
  service.getCalificaciones().subscribe(value => {
      expect(value.length).toBeGreaterThan(0);
      done();
      });
  });
  
  it('#createCalificacion should return value from observable',
  (done: DoneFn) => {
  let calificacion:Calificacion = {id:100,comentario:"prueba", puntaje: 4};
  service.createCalificacion(calificacion).subscribe(value => {
      expect(value.comentario).toEqual(calificacion.comentario);
      done();
      });
  });

  it('#getCalificacionDetail should return an existing Calificacion',
  (done: DoneFn) => {
  service.getCalificacionDetail(calificaciones[0].id).subscribe(value => {
      expect(value.comentario).toEqual(calificaciones[0].comentario);
      done();
      });
  });

  it('#updateCalificacion should return the calificacion updated',
  (done: DoneFn) => {
let calificacion:Calificacion = {id:100, comentario:"prueba", puntaje: 3.6};
  service.updateCalificacion(calificacion).subscribe(value => {
      expect(value.comentario).toEqual(calificacion.comentario);
      done();
      });
  });
});
