import { Component, Input } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante.model';

@Component({
  selector: 'app-show-restaurante',
  templateUrl: './show-restaurante.component.html',
  styleUrls: ['./show-restaurante.component.css']
})
export class ShowRestauranteComponent {

  @Input()listaRestaurantes: Restaurante[] = [];
  
  constructor() {
    
  }

 ngOnInit() {
   
 }
}
