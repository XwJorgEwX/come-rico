import { Component, Input } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante.model';

@Component({
  selector: 'app-card-restaurante',
  templateUrl: './card-restaurante.component.html',
  styleUrls: ['./card-restaurante.component.css']
})
export class CardRestauranteComponent {

  @Input() restaurante!: Restaurante;
}
