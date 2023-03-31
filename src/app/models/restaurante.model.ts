export class Restaurante{

    constructor(nombre:string, desc:string, inauguracion:string, diasAbierto:string[]=[], tipoComida:string, valoracion:number, foto:string) {

        this.nombre=nombre;
        this.desc=desc;
        this.inauguracion=inauguracion;
        this.diasAbierto=diasAbierto;
        this.tipoComida=tipoComida;
        this.valoracion=valoracion;
        this.foto=foto;
      }
    
      nombre:string="";
      desc:string=""
      inauguracion:string="";
      diasAbierto:string[];
      tipoComida:string="";
      valoracion:number=0;
      foto:string="";
}