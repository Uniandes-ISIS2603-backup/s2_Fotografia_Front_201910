import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {OrganizadorDetailComponent} from './organizador-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {OrganizadorService} from '../organizador.service';
import {Organizador} from '../organizador';

describe('OrganizadorDetailComponent', () => {
    let component: OrganizadorDetailComponent;
    let fixture: ComponentFixture<OrganizadorDetailComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                OrganizadorService,
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
        fixture = TestBed.createComponent(OrganizadorDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});
