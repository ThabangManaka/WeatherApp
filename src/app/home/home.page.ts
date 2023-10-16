import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
tempData :any;
  constructor(private weatherService : WeatherService) {
 this.weatherService.getCurrent().subscribe(res => {
   this.tempData = res
   });
 
  }

}
