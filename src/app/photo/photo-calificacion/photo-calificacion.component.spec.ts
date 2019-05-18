import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {PhotoCalificacionComponent} from './photo-calificacion.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';
import {Calificacion} from '../calificacion';

describe('PhotoCalificacionesComponent', () => {
    let component: PhotoCalificacionComponent;
    let fixture: ComponentFixture<PhotoCalificacionComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, PhotoService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotoCalificacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});