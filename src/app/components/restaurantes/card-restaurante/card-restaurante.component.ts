import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante.model';

@Component({
  selector: 'app-card-restaurante',
  templateUrl: './card-restaurante.component.html',
  styleUrls: ['./card-restaurante.component.css']
})
export class CardRestauranteComponent {

  @Input() restaurante!: Restaurante;
  @Output() deleteRestauranteEvent = new EventEmitter<number>();
  @Output() openModRestauranteEvent = new EventEmitter<number>();

  deleteRestaurante(id:number){
    this.deleteRestauranteEvent.emit(id);
  }

  openMod(id:number){
    this.openModRestauranteEvent.emit(id);
  }

  constructor(){

  }
}
