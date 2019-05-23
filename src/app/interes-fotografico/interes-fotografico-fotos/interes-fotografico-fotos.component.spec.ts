import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresFotograficoFotosComponent } from './interes-fotografico-fotos.component';

describe('InteresFotograficoFotosComponent', () => {
  let component: InteresFotograficoFotosComponent;
  let fixture: ComponentFixture<InteresFotograficoFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresFotograficoFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresFotograficoFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
