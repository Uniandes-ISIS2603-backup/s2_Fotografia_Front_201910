import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografoDetailComponent } from './fotografo-detail.component';

describe('FotografoDetailComponent', () => {
  let component: FotografoDetailComponent;
  let fixture: ComponentFixture<FotografoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
