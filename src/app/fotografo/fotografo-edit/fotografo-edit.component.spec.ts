import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografoEditComponent } from './fotografo-edit.component';

describe('FotografoEditComponent', () => {
  let component: FotografoEditComponent;
  let fixture: ComponentFixture<FotografoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotografoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
