import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  @Output() userN:EventEmitter<any> = new EventEmitter();
  constructor() { }
}
