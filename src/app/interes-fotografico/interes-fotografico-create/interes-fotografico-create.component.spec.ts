import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresFotograficoCreateComponent } from './interes-fotografico-create.component';

describe('InteresFotograficoCreateComponent', () => {
  let component: InteresFotograficoCreateComponent;
  let fixture: ComponentFixture<InteresFotograficoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresFotograficoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresFotograficoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
