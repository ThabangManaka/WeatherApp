import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherIconPage } from './weather-icon.page';

describe('WeatherIconPage', () => {
  let component: WeatherIconPage;
  let fixture: ComponentFixture<WeatherIconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeatherIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
