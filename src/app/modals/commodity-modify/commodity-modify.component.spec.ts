import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityModifyComponent } from './commodity-modify.component';

describe('CommodityModifyComponent', () => {
  let component: CommodityModifyComponent;
  let fixture: ComponentFixture<CommodityModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
