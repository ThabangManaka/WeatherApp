import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_KEY  = environment.API_KEY;
const url = 'https://api.openweathermap.org/data/3.0/onecall?';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastEndpoint = 'forecast';
  constructor(public http : HttpClient) { }

  getCurrent(): Observable<any>{
   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${"Cape Town"}&appid=${API_KEY}`)
  }

  getForecasEveryHour(lat:any,lon:any) {
    https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
    return this.http.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Cape Town&appid=87e9146464b43379098266fed155bb89`)
  }

  getDailyForecast() {

    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=Cape Town&appid=87e9146464b43379098266fed155bb89`)
  }


}
