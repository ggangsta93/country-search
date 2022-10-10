import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent implements OnInit {
  public termino: string = "";
  public esError = false;
  public capitals: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.esError = false;
    this.termino = termino;
    this.countryService.buscarCapital(this.termino).subscribe(capitals => {
      this.capitals = capitals;
    }, (err) => {
      console.log('error');
      this.esError = true;
      this.capitals = [];
    });
  }

  suggestions(termino:string){
    this.esError = false;
  }
}
