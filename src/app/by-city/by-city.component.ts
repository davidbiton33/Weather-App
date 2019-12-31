import { Component, OnInit } from '@angular/core';
import { DALService } from '../dal.service';

@Component({
  selector: 'app-by-city',
  templateUrl: './by-city.component.html',
  styleUrls: ['./by-city.component.css']
})
export class ByCityComponent implements OnInit {

  constructor(private Dal:DALService) { }
  result = {
    name: '',
    temp:'',
    country : '',
    icon: ''
  }
  cities = [
    'Acre', 'Afula', 'Arad', 'Ariel', 'Ashdod', 'Ashkelon', 'Bat-Yam', 'Beersheba', 'Beit Shean', 'Beit-Shemesh', 'Beitar-Illit'
    , 'Bnei-Brak', 'Dimona', 'Eilat', 'Elad', 'Givat-Shmuel', 'Givatayim', 'Hadera', 'Haifa', 'Herzliya'
    , 'Hod-HaSharon', 'Holon', 'Jerusalem'];


  selectCity(city){
    this.Dal.getWeatherByCity(city, 'metric').subscribe(
      data => {
        this.result = {
          name: data.list[0].name,
          temp: data.list[0].main.temp,
          country: data.list[0].sys.country,
          icon: data.list[0].weather[0].icon
        }
      }
      );
  }

  ngOnInit() {
    // this.Dal.getWeatherByCity('eilat', 'metric'); TEST
  }
}
