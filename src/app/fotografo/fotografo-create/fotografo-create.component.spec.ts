import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografoCreateComponent } from './fotografo-create.component';

describe('FotografoCreateComponent', () => {
  let component: FotografoCreateComponent;
  let fixture: ComponentFixture<FotografoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
