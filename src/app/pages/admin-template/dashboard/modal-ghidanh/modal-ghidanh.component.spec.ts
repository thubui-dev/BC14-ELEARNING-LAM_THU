import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGhidanhComponent } from './modal-ghidanh.component';

describe('ModalGhidanhComponent', () => {
  let component: ModalGhidanhComponent;
  let fixture: ComponentFixture<ModalGhidanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGhidanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGhidanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
