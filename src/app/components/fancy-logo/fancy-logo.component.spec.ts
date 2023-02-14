import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyLogoComponent } from './fancy-logo.component';

describe('FancyLogoComponent', () => {
  let component: FancyLogoComponent;
  let fixture: ComponentFixture<FancyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
