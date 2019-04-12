import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresFotograficoEditComponent } from './interes-fotografico-edit.component';

describe('InteresFotograficoEditComponent', () => {
  let component: InteresFotograficoEditComponent;
  let fixture: ComponentFixture<InteresFotograficoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresFotograficoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresFotograficoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
