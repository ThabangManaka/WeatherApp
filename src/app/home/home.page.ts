import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
tempData :any;
weatherIcon: any;
forecastData: any;
  constructor(private weatherService : WeatherService) {
 this.weatherService.getCurrent().subscribe(res => {
   this.tempData = res
   console.log(this.tempData);

  //  this.weatherService.getForecasEveryHour(this.tempData.coord.lat,this.tempData.coord.lon).subscribe(res =>{
  //  this.forecastData = res
  //  console.log(this.forecastData )
  //  })
   });


    this.weatherService.getDailyForecast().subscribe(res =>{

      this.forecastData = res,
      console.log(this.forecastData.list)

    })
  }
  // getChanceOfRain(): number {

  //   if (this.weatherData && this.weatherData.rain) {

  //     return this.weatherData.rain['1h'] || 0;
  //   } else {
  //     return 0;
  //   }
  // }
}
