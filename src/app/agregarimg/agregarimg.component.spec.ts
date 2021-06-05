import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarimgComponent } from './agregarimg.component';

describe('AgregarimgComponent', () => {
  let component: AgregarimgComponent;
  let fixture: ComponentFixture<AgregarimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
