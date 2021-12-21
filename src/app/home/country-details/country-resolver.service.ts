import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CountryData } from '../../shared/country-data.model';
import { Observable } from 'rxjs';
import { CountryService } from '../../shared/country.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<CountryData> {

  constructor(
    private countryService: CountryService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryData> {
    const alphaCode = <string>route.params['alphaCode'];
    return this.countryService.fetchCountry(alphaCode);
  }

}
