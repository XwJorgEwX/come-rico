import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowRestauranteComponent } from './components/restaurantes/show-restaurante/show-restaurante.component';
import { CreateRestauranteComponent } from './components/restaurantes/create-restaurante/create-restaurante.component';
import { CardRestauranteComponent } from './components/restaurantes/card-restaurante/card-restaurante.component';
import { StarRateComponent } from './shared/components/star-rate/star-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowRestauranteComponent,
    CreateRestauranteComponent,
    CardRestauranteComponent,
    StarRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
