import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { CalificacionCreateComponent } from './calificacion-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';

describe('CalificacionCreateComponent', () => {
 let component: CalificacionCreateComponent;
    let fixture: ComponentFixture<CalificacionCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                CalificacionService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalificacionCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});