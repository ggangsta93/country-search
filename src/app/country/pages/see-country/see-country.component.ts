import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.countryService.getCountryByAlpha(id))
    ).subscribe(resp => {
      console.log(resp);
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
