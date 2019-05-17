import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import {Photo} from './photo';
import {Calificacion} from './calificacion';

describe('PhotoService', () => {
  let injector: TestBed;
  let service: PhotoService;
    const photos: Photo[]=require('../../assets/photos.json');
    const calificaciones: Calificacion[] = require('../../assets/calificaciones.json');
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });

  it('#createCalificacion should return value from observable',
    (done: DoneFn) => {
    service.createCalificacion(photos[0].id,calificaciones[0]).subscribe(value => {
        expect(value.puntaje).toEqual(calificaciones[0].puntaje);
        done();
        });
    });
});
