import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypageComponent } from './modifypage.component';

describe('ModifypageComponent', () => {
  let component: ModifypageComponent;
  let fixture: ComponentFixture<ModifypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
