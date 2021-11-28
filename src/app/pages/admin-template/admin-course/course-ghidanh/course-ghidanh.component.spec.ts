import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGhidanhComponent } from './course-ghidanh.component';

describe('CourseGhidanhComponent', () => {
  let component: CourseGhidanhComponent;
  let fixture: ComponentFixture<CourseGhidanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseGhidanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGhidanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
