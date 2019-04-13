import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoEditComponent } from './concurso-edit.component';

describe('ConcursoEditComponent', () => {
  let component: ConcursoEditComponent;
  let fixture: ComponentFixture<ConcursoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
