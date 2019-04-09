import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoListComponent } from './concurso-list.component';

describe('ConcursoListComponent', () => {
  let component: ConcursoListComponent;
  let fixture: ComponentFixture<ConcursoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
