import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZoneComponent } from './test-zone.component';

describe('TestZoneComponent', () => {
  let component: TestZoneComponent;
  let fixture: ComponentFixture<TestZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestZoneComponent]
    });
    fixture = TestBed.createComponent(TestZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
