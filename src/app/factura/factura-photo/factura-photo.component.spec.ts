import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPhotoComponent } from './factura-photo.component';

describe('FacturaPhotoComponent', () => {
  let component: FacturaPhotoComponent;
  let fixture: ComponentFixture<FacturaPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
