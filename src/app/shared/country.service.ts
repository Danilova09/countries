import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CountryData } from './country-data.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: Country[] = [];
  countriesChange = new Subject<Country[]>();
  isFetchingCountriesChange = new Subject<boolean>();
  isFetchingCountryChange = new Subject<boolean>();

  constructor(
    private http: HttpClient,
  ) { }

  getCountries() {
    return this.countries.slice();
  }

  fetchCountriesData() {
    this.isFetchingCountriesChange.next(true);
    this.http.get<Country[]>('http://146.185.154.90:8080/restcountries/rest/v2/all?fields=name;alpha3Code')
      .pipe(tap(result => {
        this.isFetchingCountriesChange.next(false);
      }, () => {
        this.isFetchingCountriesChange.next(false);
      }))
      .subscribe(result => {
        this.countries = result;
        this.countriesChange.next(this.countries);
      })
  }

  fetchCountry(alphaCode: string) {
    this.isFetchingCountryChange.next(true);
    return this.http.get<CountryData>(`http://146.185.154.90:8080/restcountries/rest/v2/alpha/${alphaCode}`)
      .pipe(map(result => {
        this.isFetchingCountryChange.next(false);
        return new CountryData(result.name, result.capital, result.population, result.region, result.subregion, result.alpha3Code);
      }));
  }

}
