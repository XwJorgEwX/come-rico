import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-restaurante',
  templateUrl: './create-restaurante.component.html',
  styleUrls: ['./create-restaurante.component.css']
})
export class CreateRestauranteComponent {
  @Output() newRestauranteEvent = new EventEmitter<{ nombre:string, desc:string, inauguracion:string, diasAbierto:string[], tipoComida:string, valoracion:number, foto:string }>();
}
