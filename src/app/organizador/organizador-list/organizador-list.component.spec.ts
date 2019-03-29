import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import {OrganizadorListComponent} from './organizador-list.component';
import {Organizador} from '../organizador';
import OrganizadorService} from '../organizador.service';

describe('OrganizadorComponent', () => {
    let component: OrganizadorListComponent;
    let fixture: ComponentFixture<OrganizadorListComponent>;
    const organizadors: Organizador[] = require('../../../assets/organizadors.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, OrganizadorService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OrganizadorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of organizadors', () => {
        component.organizadors = organizadors;
        expect(component.organizadors.length).toEqual(organizadors.length);
    });

    it('an author should be an author (first and last)', () => {
        component.organizadors = organizadors;
        expect(component.organizadors[0].name).toEqual(organizadors[0].name);
        expect(component.organizadors[organizadors.length - 1].name).toEqual(organizadors[organizadors.length - 1].name);
    });

});