import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityDeleteComponent } from './commodity-delete.component';

describe('CommodityDeleteComponent', () => {
  let component: CommodityDeleteComponent;
  let fixture: ComponentFixture<CommodityDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
