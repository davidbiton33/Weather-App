import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCityComponent } from './by-city.component';

describe('ByCityComponent', () => {
  let component: ByCityComponent;
  let fixture: ComponentFixture<ByCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
