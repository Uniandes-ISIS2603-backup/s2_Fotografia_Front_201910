import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { PhotoAddCalificacionComponent } from './photo-add-calificacion.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';

describe('PhotoAddCalificacionComponent', () => {
  let component: PhotoAddCalificacionComponent;
    let fixture: ComponentFixture<PhotoAddCalificacionComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                PhotoService,
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
        fixture = TestBed.createComponent(PhotoAddCalificacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});