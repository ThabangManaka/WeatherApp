import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherIconPage } from './weather-icon.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherIconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherIconPageRoutingModule {}
