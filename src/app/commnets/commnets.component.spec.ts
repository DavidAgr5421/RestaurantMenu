import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommnetsComponent } from './commnets.component';

describe('CommnetsComponent', () => {
  let component: CommnetsComponent;
  let fixture: ComponentFixture<CommnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommnetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
