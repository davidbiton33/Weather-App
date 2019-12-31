import { Component, OnInit } from '@angular/core';
import { DALService } from '../dal.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = ['Acre', 'Afula', 'Arad', 'Ariel', 'Ashdod', 'Ashkelon', 'Beersheba', 'Holon', 'Jerusalem'];
  constructor(private Dal: DALService) {
  }
  citiesData = [];

  loadCitiesData() {
    this.cities.forEach(
      city => {
        this.Dal.getWeatherByCity(city).subscribe(data => {
          this.citiesData.push(
            { name: data.list[0].name, temp: data.list[0].main.temp, country: data.list[0].sys.country, icon: data.list[0].weather[0].icon }
          )
        })
      }
    )
  }
  ngOnInit() {
    this.loadCitiesData();
  }

}
