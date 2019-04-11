import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorEditComponent } from './organizador-edit.component';

describe('OrganizadorEditComponent', () => {
  let component: OrganizadorEditComponent;
  let fixture: ComponentFixture<OrganizadorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizadorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
