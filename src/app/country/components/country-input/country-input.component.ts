import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent {

  @Output() onEnter: EventEmitter<String>=new EventEmitter();

  public termino: string = "";

  buscar() {
    this.onEnter.emit(this.termino);
  }

}
