import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {CalificacionDetailComponent} from './calificacion-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';

describe('CalificacionDetailComponent', () => {
  let component: CalificacionDetailComponent;
  let fixture: ComponentFixture<CalificacionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ ],
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
