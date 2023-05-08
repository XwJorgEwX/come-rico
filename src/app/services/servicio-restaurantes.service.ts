import { Injectable } from '@angular/core';
import { Restaurante } from '../models/restaurante.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestaurantesService {

  listaRestaurantes:Restaurante[]=[
    //new Restaurante(0, "Me Too", "Buffet libre asiatico", "2018/05/20", ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'], "Asiatica", 4, "assets/metoo.jpg"),
    //new Restaurante(1, "Aires Burger", "Hamburguesería argentina", "2020/02/13", ['lunes', 'martes', 'jueves', 'viernes'], "Hamburgueseria", 5, "assets/aires.jpg")
  ];

  getLista():Observable<Restaurante[]>{
    return of(this.listaRestaurantes);
  }

  addRestaurante(newRestaurante:Restaurante){
    this.listaRestaurantes.push(newRestaurante);
  }

  deleteRestaurante(id:number){
    let index = this.listaRestaurantes.findIndex(x => x.id === id);
    
    if(confirm("De verdad quiere eliminar el restaurante "+this.listaRestaurantes[index].nombre+"?")){
      this.listaRestaurantes.splice(index, 1);
    }
  }

  getRestaurante(id:number){
    let restaurante = this.listaRestaurantes.find(x => x.id === id);
    return restaurante;
  }

  modRestaurante(id:number, newModRestaurante:Restaurante){
    let index = this.listaRestaurantes.findIndex(x => x.id === id);
    this.listaRestaurantes[index] = newModRestaurante;
    alert("Datos actualizados con éxito");
  }

  constructor() { 
  }
}
