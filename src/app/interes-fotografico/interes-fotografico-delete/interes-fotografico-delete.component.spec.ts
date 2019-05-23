import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresFotograficoDeleteComponent } from './interes-fotografico-delete.component';

describe('InteresFotograficoDeleteComponent', () => {
  let component: InteresFotograficoDeleteComponent;
  let fixture: ComponentFixture<InteresFotograficoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresFotograficoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresFotograficoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
