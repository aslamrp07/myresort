import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortAddComponent } from './resort-add.component';

describe('ResortAddComponent', () => {
  let component: ResortAddComponent;
  let fixture: ComponentFixture<ResortAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
