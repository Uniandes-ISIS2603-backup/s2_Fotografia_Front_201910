import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Organizador} from './Organizador';
import {OrganizadorService} from './organizador.service';
import {AppModule} from '../app.module';


describe('Service: OrganizadorService', () => {
    let injector: TestBed;
    let service: OrganizadorService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, OrganizadorService]
        });
        injector = getTestBed();
        service = injector.get(OrganizadorService);
    });
    
    it('#getOrganizadors should return value from observable',
    (done: DoneFn) => {
    service.getOrganizadors().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});
