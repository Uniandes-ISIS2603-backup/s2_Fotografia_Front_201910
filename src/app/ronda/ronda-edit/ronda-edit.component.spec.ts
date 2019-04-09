import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {RondaEditComponent} from './ronda-edit.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {RondaService} from '../ronda.service';
import {Ronda} from '../ronda';
describe('AuthorEditComponent', () => {
    let component: RondaEditComponent;
    let fixture: ComponentFixture<RondaEditComponent>;
    
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
        fixture = TestBed.createComponent(RondaEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
