import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante.model';

@Component({
  selector: 'app-show-restaurante',
  templateUrl: './show-restaurante.component.html',
  styleUrls: ['./show-restaurante.component.css']
})
export class ShowRestauranteComponent {

  @Output() deleteRestauranteEvent = new EventEmitter<number>();
  @Output() openModRestauranteEvent = new EventEmitter<number>();
  @Input()listaRestaurantes: Restaurante[] = [];
  
  constructor() {
    
  }

  deleteRestaurante(id:number){
    this.deleteRestauranteEvent.emit(id);
  }

  openModRestaurante(id:number){
    this.openModRestauranteEvent.emit(id);
  }

 ngOnInit() {
   
 }
}
