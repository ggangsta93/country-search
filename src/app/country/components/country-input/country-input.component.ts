import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<String> = new EventEmitter();
  @Output() onDebounce: EventEmitter<String> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  public termino: string = "";

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(valor => {
      this.onDebounce.emit(valor);
    })
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  };

}
