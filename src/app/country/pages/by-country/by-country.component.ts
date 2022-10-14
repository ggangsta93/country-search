import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent implements OnInit {

  public termino: string = "";
  public esError = false;
  public countries: Country[] = [];
  public suggestedCountries: Country[] = [];
  public showSuggestion:boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.esError = false;
    this.termino = termino;
    this.showSuggestion=false;
    this.countryService.buscarPais(this.termino).subscribe(paises => {
      this.countries = paises;
    }, (err) => {
      console.log('error');
      this.esError = true;
      this.countries = [];
    });
  }

  suggestions(termino: string) {
    this.esError = false;
    this.termino = termino;
    this.showSuggestion=true;
    this.countryService.buscarPais(termino)
      .subscribe(
        countries =>  this.suggestedCountries = countries.splice(0,3),
         (err)=> this.suggestedCountries=[] 
      );
  }

}
