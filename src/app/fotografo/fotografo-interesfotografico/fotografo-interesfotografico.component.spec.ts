import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografoInteresfotograficoComponent } from './fotografo-interesfotografico.component';

describe('FotografoInteresfotograficoComponent', () => {
  let component: FotografoInteresfotograficoComponent;
  let fixture: ComponentFixture<FotografoInteresfotograficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografoInteresfotograficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografoInteresfotograficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
