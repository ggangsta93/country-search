import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent implements OnInit {

  public termino: string = "";
  public esError = false;
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.esError = false;
    this.termino = termino;
    console.log(this.termino);
    this.countryService.buscarPais(this.termino).subscribe(paises => {
      this.countries = paises;
    }, (err) => {
      console.log('error');
      this.esError = true;
      this.countries = [];
    });
  }

}
