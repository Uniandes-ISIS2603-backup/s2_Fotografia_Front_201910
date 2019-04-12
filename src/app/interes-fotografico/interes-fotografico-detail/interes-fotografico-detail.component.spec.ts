import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresFotograficoDetailComponent } from './interes-fotografico-detail.component';

describe('InteresFotograficoDetailComponent', () => {
  let component: InteresFotograficoDetailComponent;
  let fixture: ComponentFixture<InteresFotograficoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresFotograficoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresFotograficoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
