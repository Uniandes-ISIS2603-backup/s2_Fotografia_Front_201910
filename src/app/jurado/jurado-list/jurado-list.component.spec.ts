import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {JuradoListComponent} from './jurado-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {JuradoService} from '../jurado.service';
import {Jurado} from '../jurado';

describe('JuradoListComponent', () => {
  let component: JuradoListComponent;
  let fixture: ComponentFixture<JuradoListComponent>;
  const jurados: Jurado[] = require('../../../assets/jurados.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ JuradoListComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, JuradoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of jurados', () => {
    component.jurados = jurados;
    expect(component.jurados.length).toEqual(jurados.length);
});

it('a Jurado should be a jurados (first and last)', () => {
    component.jurados = jurados;
    //revisar todos los libros
    expect(component.jurados[0].nombre).toEqual(jurados[0].nombre);
    expect(component.jurados[jurados.length - 1].nombre).toEqual(jurados[jurados.length - 1].nombre);
});

});
