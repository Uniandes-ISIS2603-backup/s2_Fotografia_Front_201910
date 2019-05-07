import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoPhotoComponent } from './concurso-photo.component';

describe('ConcursoPhotoComponent', () => {
  let component: ConcursoPhotoComponent;
  let fixture: ComponentFixture<ConcursoPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
