import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDashComponent } from './color-dash.component';

describe('ColorDashComponent', () => {
  let component: ColorDashComponent;
  let fixture: ComponentFixture<ColorDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
