import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from './models/restaurante.model';
import { ServicioRestaurantesService } from './services/servicio-restaurantes.service';
import { ModalComponent } from './shared/components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comeRico';

  ngOnInit(){
    //let list$ = await this.servicioRestaurante.getLista().toPromise;
    this.getLista();
  }

  @ViewChild('modal') modal!: ModalComponent;

  idSelected!: number;
  modSelected!: Restaurante;

  listaRestaurantes:Restaurante[] = [];

  getLista():void{
    this.servicioRestaurante.getLista()
      .subscribe( x => {
        console.log(x);
        this.listaRestaurantes = x;
    });
  }

  addRestaurante(newRestaurante:Restaurante)
  {
    let id:number;
    let i = this.listaRestaurantes.length - 1;
    //console.log(i);
    if(i < 0){
      id = 0;
    }
    else{
      id = this.listaRestaurantes[i].id + 1;
    }

    //console.log(newRestaurante.id);
    //console.log(id);
    newRestaurante.setId = id;

    //console.log(newRestaurante.id);
    this.servicioRestaurante.addRestaurante(newRestaurante);
  }

  modRestaurante(modRestaurante:Restaurante)
  {
    modRestaurante.id = this.idSelected;
    this.servicioRestaurante.modRestaurante(this.idSelected, modRestaurante);
    this.modal.hideModal();
  }

  openModRestaurante(id:number){
    this.idSelected = id;
    const mod = this.servicioRestaurante.getRestaurante(this.idSelected);
    this.modal.showModal();
    if(mod){
      this.modSelected = mod;
    }else{
      alert("Error al cargar los datos del restaurante.");
    }
  }

  deleteRestaurante(id:number){
    this.idSelected = id;
    this.servicioRestaurante.deleteRestaurante(this.idSelected);
  }

  constructor(private servicioRestaurante:ServicioRestaurantesService){

  }
}