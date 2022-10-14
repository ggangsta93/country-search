import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }`
  ]
})
export class ByRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private countryService: CountryService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.countryService.buscarRegion(region)
      .subscribe(paises => this.paises = paises);
  }

}
