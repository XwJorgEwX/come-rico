import { Component } from '@angular/core';
import { Restaurante } from './models/restaurante.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comeRico';

  listaRestaurantes:Restaurante[]=[
    new Restaurante("Me Too", "Buffet libre asiatico", "2018/05/20", ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'], "asiatico", 4, "assets/metoo.jpg"),
    new Restaurante("Aires Burger", "Hamburguesería argentina", "2020/02/13", ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'], "hamburgueseria", 5, "assets/aires.jpg")
  ];

  addRestaurante(newRestaurante:Restaurante)
  {
    //let newR = new Restaurante(newRestaurante.nombre, newRestaurante.desc, newRestaurante.inauguracion, newRestaurante.diasAbierto, newRestaurante.tipoComida, newRestaurante.valoracion, newRestaurante.foto);
    this.listaRestaurantes.push(newRestaurante);
    console.log(this.listaRestaurantes);
  }
}
