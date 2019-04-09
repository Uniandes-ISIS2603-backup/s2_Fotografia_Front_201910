import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { RondaCreateComponent } from './ronda-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {RondaService} from '../ronda.service';
import {Ronda} from '../ronda';

describe('RondaCreateComponent', () => {
 let component: RondaCreateComponent;
    let fixture: ComponentFixture<RondaCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                RondaService,
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
        fixture = TestBed.createComponent(RondaCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});