import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoCreateComponent } from './concurso-create.component';

describe('ConcursoCreateComponent', () => {
  let component: ConcursoCreateComponent;
  let fixture: ComponentFixture<ConcursoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
