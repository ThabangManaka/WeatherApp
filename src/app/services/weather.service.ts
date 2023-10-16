import { HttpClient } from '@angular/common/http';
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
  constructor(public http : HttpClient) { }

  getCurrent(): Observable<any>{
   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${"Cape Town"}&appid=${API_KEY}`)
  }
}
