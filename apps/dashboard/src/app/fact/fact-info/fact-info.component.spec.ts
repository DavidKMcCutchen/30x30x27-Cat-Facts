import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactInfoComponent } from './fact-info.component';

describe('FactInfoComponent', () => {
  let component: FactInfoComponent;
  let fixture: ComponentFixture<FactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
