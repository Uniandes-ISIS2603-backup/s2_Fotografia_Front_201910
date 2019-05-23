import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {JuradoConcursoComponent} from './jurado-concurso.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {JuradoService} from '../jurado.service';
import {Jurado} from '../jurado';


describe('PhotoCalificacionesComponent', () => {
    let component: JuradoConcursoComponent;
    let fixture: ComponentFixture<JuradoConcursoComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, JuradoService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JuradoConcursoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});