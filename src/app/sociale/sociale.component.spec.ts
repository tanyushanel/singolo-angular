import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialeComponent } from './sociale.component';

describe('SocialeComponent', () => {
  let component: SocialeComponent;
  let fixture: ComponentFixture<SocialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
