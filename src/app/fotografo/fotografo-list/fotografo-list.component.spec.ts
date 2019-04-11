import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografoListComponent } from './fotografo-list.component';

describe('FotografoListComponent', () => {
  let component: FotografoListComponent;
  let fixture: ComponentFixture<FotografoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
