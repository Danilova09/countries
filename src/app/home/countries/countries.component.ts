import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../shared/country.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  countriesChangeSubscription!: Subscription;
  isFetchingChangeSubscription!: Subscription;
  isFetchingCountries = false;

  constructor(
    private countryService: CountryService,
  ) { }

  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
    this.countriesChangeSubscription = this.countryService.countriesChange.subscribe((countries: Country[]) => {
      this.countries = countries;
    })
    this.isFetchingChangeSubscription = this.countryService.isFetchingCountriesChange.subscribe((isFetching: boolean) => {
      this.isFetchingCountries = isFetching;
    })
    this.countryService.fetchCountriesData();
  }

  ngOnDestroy() {
    this.countriesChangeSubscription.unsubscribe();
    this.isFetchingChangeSubscription.unsubscribe();
  }

}
