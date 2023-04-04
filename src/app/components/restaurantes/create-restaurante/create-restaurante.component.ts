import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante.model';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-restaurante',
  templateUrl: './create-restaurante.component.html',
  styleUrls: ['./create-restaurante.component.css']
})
export class CreateRestauranteComponent {
  @Output() newRestauranteEvent = new EventEmitter<Restaurante>();
  @ViewChild('inputFile', { static: false })myInputVariable!: ElementRef;

  selectComida = ["Italiana", "Asiatica", "Hamburgueseria"];

  checkDaysObjects = [
    {day : "lunes", selected : false},
    {day : "martes", selected : false},
    {day : "miercoles", selected : false},
    {day : "jueves", selected : false},
    {day : "viernes", selected : false},
    {day : "sabado", selected : false},
    {day : "domingo", selected : false}
  ];

  nombre:string="";
  desc:string="";
  inauguracion:string="";
  tipoComida="";
  diasAbierto:string[]=[];
  valoracion:number=-1;
  foto:string="";
  today = new Date();
  filename="";

  /*
  restauranteForm=new FormGroup({
    nombreControl: new FormControl(this.nombre, [
      Validators.minLength(4)
    ])
  })
  */
  crearRestaurante(){
    for(let day of this.checkDaysObjects){
      if(day.selected){
        this.diasAbierto.push(day.day);
      }
    }

    if(this.foto==""){
      this.foto="assets/default.png";
    }

    this.newRestauranteEvent.emit(
      new Restaurante(this.nombre, this.desc, this.inauguracion, this.diasAbierto, this.tipoComida, this.valoracion, this.foto)
      );
  }

  catchFile(event:any){
    //console.log(event.target.files);
    if(event.target.files)
    {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.foto = event.target.result;
      }
    }
  }

  clearForm(){
    this.foto = "";
    this.valoracion=-1;
  }

  onSubmit(restauranteForm:any){
    //console.log();
    
    let dateForm =new Date(restauranteForm.controls['inauguracion'].value);

    restauranteForm.control.markAllAsTouched();

    if(restauranteForm.valid==false){
      if(this.valoracion == -1){
        this.valoracion = 0;
      }
      return;
    }
    if(dateForm > this.today){
      restauranteForm.controls['inauguracion'].setErrors({'max-date': true});
      //console.log(restauranteForm.controls);
      return;
    }
    if(this.valoracion == 0 || this.valoracion == -1){
      this.valoracion = 0;
      //console.log(this.valoracion);
      return;
    }

    this.crearRestaurante();

    this.nombre="";
    this.desc="";
    this.inauguracion="";
    this.diasAbierto=[];
    for(let day of this.checkDaysObjects){
      day.selected = false;
    }
    this.valoracion=-1;
    this.foto = "";
    this.filename="";
    this.myInputVariable.nativeElement.value="";

    restauranteForm.reset();
  }

  addNewRate(newRate:number){
    //console.log(newRate);
    this.valoracion=newRate;
  }
}
