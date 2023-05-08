export class Restaurante{

    constructor(id:number, nombre:string, desc:string, inauguracion:string, diasAbierto:string[]=[], tipoComida:string, valoracion:number, foto:string) {

        this.id=-1;
        this.nombre=nombre;
        this.desc=desc;
        this.inauguracion=inauguracion;
        this.diasAbierto=diasAbierto;
        this.tipoComida=tipoComida;
        this.valoracion=valoracion;
        this.foto=foto;
      }
    
      id:number=-1;
      nombre:string="";
      desc:string=""
      inauguracion:string="";
      diasAbierto:string[];
      tipoComida:string="";
      valoracion:number=0;
      foto:string="";

      public set setId(value:number){
        this.id = value;
      }
}