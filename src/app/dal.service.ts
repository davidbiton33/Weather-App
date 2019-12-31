import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DALService {
  readonly appKey = '57d6f18e1e4546b21681d178da3328ae';
  readonly apiUrl ='http://api.openweathermap.org/data/2.5/find';
  // var appid = '57d6f18e1e4546b21681d178da3328ae';
  // fullurl = `http://api.openweathermap.org/data/2.5/find?units=metric&q=${q}&appid=${appid}`;
  constructor(private http:HttpClient) {}

  public getWeatherByCity(cityName:string, tempType:'metric'|'imperial' ='metric') :any
  {
   return this.http.get(`${this.apiUrl}/?units=${tempType}&q=${cityName}&appid=${this.appKey}`)
  }
  




}
