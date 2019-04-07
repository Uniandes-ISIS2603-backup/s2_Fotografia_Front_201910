import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {CalificacionListComponent} from './calificacion-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';

describe('CalificacionListComponent', () => {
  let component: CalificacionListComponent;
  let fixture: ComponentFixture<CalificacionListComponent>;
  const calificaciones: Calificacion[] = require('../../../assets/calificaciones.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ CalificacionListComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, CalificacionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of calificaciones', () => {
    component.calificaciones = calificaciones;
    expect(component.calificaciones.length).toEqual(calificaciones.length);
});

it('a calificacion should be a calificaciones (first and last)', () => {
    component.calificaciones = calificaciones;
    //revisar todos los libros
    expect(component.calificaciones[0].comentario).toEqual(calificaciones[0].comentario);
    expect(component.calificaciones[calificaciones.length - 1].comentario).toEqual(calificaciones[calificaciones.length - 1].comentario);
});

});
