import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherIconPageRoutingModule } from './weather-icon-routing.module';

import { WeatherIconPage } from './weather-icon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherIconPageRoutingModule
  ],
  declarations: [WeatherIconPage]
})
export class WeatherIconPageModule {}
