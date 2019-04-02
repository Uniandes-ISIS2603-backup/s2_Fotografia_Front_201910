import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoDetailComponent } from './concurso-detail.component';

describe('ConcursoDetailComponent', () => {
  let component: ConcursoDetailComponent;
  let fixture: ComponentFixture<ConcursoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
