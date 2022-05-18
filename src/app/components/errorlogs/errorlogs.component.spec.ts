import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorlogsComponent } from './errorlogs.component';

describe('ErrorlogsComponent', () => {
  let component: ErrorlogsComponent;
  let fixture: ComponentFixture<ErrorlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
