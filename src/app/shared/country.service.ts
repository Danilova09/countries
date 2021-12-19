import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: Country[] = [];
  countriesChange = new Subject<Country[]>();
  isFetchingCountriesChange = new Subject<boolean>();

  constructor(
    private http: HttpClient,
  ) {
  }


  getCountries() {
    return this.countries.slice();
  }

  fetchCountriesData() {
    this.isFetchingCountriesChange.next(true);
    this.http.get<Country[]>('http://146.185.154.90:8080/restcountries/rest/v2/all?fields=name;alpha3Code')
      .subscribe(result => {
        this.countries = result;
        this.isFetchingCountriesChange.next(false);
        this.countriesChange.next(this.countries);
      }, () => {
        this.isFetchingCountriesChange.next(false);
      })
  }

}
