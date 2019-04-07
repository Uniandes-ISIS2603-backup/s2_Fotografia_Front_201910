import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {JuradoDetailComponent} from './jurado-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {JuradoService} from '../jurado.service';
import {Jurado} from '../jurado';

describe('JuradoDetailComponent', () => {
  let component: JuradoDetailComponent;
  let fixture: ComponentFixture<JuradoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ ],
      providers: [
        {
            provide: APP_BASE_HREF,
            useValue: ''
        }, 
        JuradoService,
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
    fixture = TestBed.createComponent(JuradoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
