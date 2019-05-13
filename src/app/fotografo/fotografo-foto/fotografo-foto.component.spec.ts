import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografoFotoComponent } from './fotografo-foto.component';

describe('FotografoFotoComponent', () => {
  let component: FotografoFotoComponent;
  let fixture: ComponentFixture<FotografoFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografoFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografoFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
