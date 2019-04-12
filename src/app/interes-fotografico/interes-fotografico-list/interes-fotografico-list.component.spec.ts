import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresFotograficoListComponent } from './interes-fotografico-list.component';

describe('InteresFotograficoListComponent', () => {
  let component: InteresFotograficoListComponent;
  let fixture: ComponentFixture<InteresFotograficoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresFotograficoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresFotograficoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
