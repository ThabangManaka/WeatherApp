import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

@ViewChild('lineCanvas') lineCanvas: ElementRef;

tempData : any;
segmentVaue = '1';
lineChart :any;
weeklyWeatherData: any;
  filteredWeather: any[] = [];
  constructor(private weatherService : WeatherService) {


    this.weatherService.getDailyForecast().subscribe(res =>{
      console.log(res)
        this.tempData = res

        this.weatherService.getWeeklyForecast(this.tempData.city.coord.lat,this.tempData.city.coord.lon).subscribe(res =>{
          console.log(res)
        })

    })
    this.weatherService.getWeeklyWeather("city").subscribe(res =>{
      this.weeklyWeatherData = res;
      this.filterWeatherForNext7Days();
    })
   }
   filterWeatherForNext7Days() {
    const today = new Date();
    const next7Days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dayOfWeek = this.getDayOfWeek(date);
      const forecastForDay = this.filterWeatherByDay(date);

      if (forecastForDay) {
        next7Days.push({ dayOfWeek, forecast: forecastForDay });
      }
    }
  console.log(next7Days)
    this.filteredWeather = next7Days;
  }
   filterWeatherByDay(targetDate: Date): any {
    return this.weeklyWeatherData.list.find((forecast: any) => {
      const forecastDate = new Date(forecast.dt * 1000);
      return this.isSameDay(targetDate, forecastDate);
    });
  }
  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
   getDayOfWeek(date: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
  ngOnInit() {
  }

    ngAfterViewInit() {
      console.log('After')
      this.lineChartMethod();
    }
    // segmentChange(event) {
    //   console.log(event);
    //   this.segmentValue = event.detail.value
    // }

    lineChartMethod() {
      this.lineChart = new Chart(this.lineCanvas.nativeElement,{
        type : 'line',
        data : {
          labels : ['Sun','Mon','Tue','Wed','Thur','Fri'],
          datasets: [
            {
            label : 'Covid RATE',
            fill: 'false',
            backgroundColor: '#fff',
            borderColor: '#E31007',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#fff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#E31007',
            pointHoverBorderColor: '#E31007',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1,2,3,4,5,6,7],
            spanGaps: false
          }
        ]
        },
        options : {
          // responsive: true,
          // maintainAspectRatio: false,

        }
      });
    }
}
