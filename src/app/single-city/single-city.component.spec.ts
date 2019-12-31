import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCityComponent } from './single-city.component';

describe('SingleCityComponent', () => {
  let component: SingleCityComponent;
  let fixture: ComponentFixture<SingleCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
