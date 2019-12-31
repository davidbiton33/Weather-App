import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCityComponent } from './by-city/by-city.component';
import { CitiesComponent } from './cities/cities.component';


const routes: Routes = [
  {path: '', component: ByCityComponent },
  {path: 'city', component: ByCityComponent },
  {path: 'cities', component: CitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
