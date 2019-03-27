import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursomoduleListComponent } from './concursomodule-list.component';

describe('ConcursomoduleListComponent', () => {
  let component: ConcursomoduleListComponent;
  let fixture: ComponentFixture<ConcursomoduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursomoduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursomoduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
