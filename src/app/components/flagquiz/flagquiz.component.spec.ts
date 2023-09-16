import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagquizComponent } from './flagquiz.component';

describe('FlagquizComponent', () => {
  let component: FlagquizComponent;
  let fixture: ComponentFixture<FlagquizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlagquizComponent]
    });
    fixture = TestBed.createComponent(FlagquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
