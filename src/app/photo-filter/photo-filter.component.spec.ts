import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFilterComponent } from './photo-filter.component';

describe('PhotoFilterComponent', () => {
  let component: PhotoFilterComponent;
  let fixture: ComponentFixture<PhotoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
