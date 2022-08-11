import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamonaDashComponent } from './kamona-dash.component';

describe('KamonaDashComponent', () => {
  let component: KamonaDashComponent;
  let fixture: ComponentFixture<KamonaDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamonaDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KamonaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
