import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { CountryDetailsComponent } from './home/country-details/country-details.component';
import { CountryResolverService } from './home/country-details/country-resolver.service';
import { ChooseCountryComponent } from './home/choose-country/choose-country.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', component: ChooseCountryComponent},
      {
        path: 'country/:alphaCode',
        component: CountryDetailsComponent,
        resolve: {country: CountryResolverService}
      },]
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
