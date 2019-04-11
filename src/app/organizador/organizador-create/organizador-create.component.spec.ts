import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorCreateComponent } from './organizador-create.component';

describe('OrganizadorCreateComponent', () => {
  let component: OrganizadorCreateComponent;
  let fixture: ComponentFixture<OrganizadorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizadorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
