import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit {

  public country!: Country;

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.countryService.getCountryByAlpha(id)),tap(console.log)
    ).subscribe(resp => {
      this.country = resp;
    })

    /*
    this.activateRoute.params.subscribe(
      ({ id }) => {
        console.log(id);

        this.countryService.getCountryByAlpha(id).subscribe(country => {
          console.log(country);
        });

      }
    )
    */
  }

}
