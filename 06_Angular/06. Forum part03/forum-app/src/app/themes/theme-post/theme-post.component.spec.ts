import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePostComponent } from './theme-post.component';

describe('ThemePostComponent', () => {
  let component: ThemePostComponent;
  let fixture: ComponentFixture<ThemePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemePostComponent]
    });
    fixture = TestBed.createComponent(ThemePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
