import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Jurado} from './jurado';
import { JuradoService } from './jurado.service';
import {AppModule} from '../app.module';

describe('Service: JuradoService', () => {
  let injector: TestBed;
    let service: JuradoService;
    const jurados: Jurado[] = require('../../assets/jurados.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, JuradoService]
    });
        injector = getTestBed();
        service = injector.get(JuradoService);
  });

  it('#getJuradoes should return value from observable',
  (done: DoneFn) => {
  service.getJurados().subscribe(value => {
      expect(value.length).toBeGreaterThan(0);
      done();
      });
  });
  
  it('#createJurado should return value from observable',
  (done: DoneFn) => {
  let jurado:Jurado = {id:100,nombre:"Pepito"};
  service.createJurado(jurado).subscribe(value => {
      expect(value.nombre).toEqual(jurado.nombre);
      done();
      });
  });

  it('#getJuradoDetail should return an existing Jurado',
  (done: DoneFn) => {
  service.getJuradoDetail(jurados[0].id).subscribe(value => {
      expect(value.nombre).toEqual(jurados[0].nombre);
      done();
      });
  });

  it('#updateJurado should return the Jurado updated',
  (done: DoneFn) => {
let jurado:Jurado = {id:100, nombre:"Pepito"};
  service.updateJurado(jurado).subscribe(value => {
      expect(value.nombre).toEqual(jurado.nombre);
      done();
      });
  });
});
