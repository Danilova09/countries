import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { CountriesComponent } from './home/countries/countries.component';
import { CountryItemComponent } from './home/countries/country-item/country-item.component';
import { CountryDetailsComponent } from './home/country-details/country-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ChooseCountryComponent } from './home/choose-country/choose-country.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CountriesComponent,
    CountryDetailsComponent,
    CountryItemComponent,
    ChooseCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
