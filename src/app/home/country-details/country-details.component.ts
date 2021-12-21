import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryData } from '../../shared/country-data.model';
import { CountryService } from '../../shared/country.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  countryDetails!: CountryData;
  isFetchingCountryDetails = false;
  isFetchingCountryDetailsSubscription!: Subscription;
  countryDetailsSubscription!: Subscription;

  constructor(
    private routeActivated: ActivatedRoute,
    private countryService: CountryService,
  ) { }

  ngOnInit(): void {
    this.isFetchingCountryDetailsSubscription = this.routeActivated.data.subscribe((data) => {
      this.countryDetails = data.country;
    });
    this.isFetchingCountryDetailsSubscription = this.countryService.isFetchingCountryChange.subscribe((isFetching: boolean) => {
      this.isFetchingCountryDetails = isFetching;
    })
  }

  ngOnDestroy() {
    this.countryDetailsSubscription.unsubscribe();
    this.isFetchingCountryDetailsSubscription.unsubscribe();
  }
}
