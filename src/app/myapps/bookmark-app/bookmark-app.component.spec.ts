import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkAppComponent } from './bookmark-app.component';

describe('BookmarkAppComponent', () => {
  let component: BookmarkAppComponent;
  let fixture: ComponentFixture<BookmarkAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
