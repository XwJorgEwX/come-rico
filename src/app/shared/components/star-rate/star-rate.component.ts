import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.css']
})
export class StarRateComponent {

  @Input() inputFunctional:boolean=false;
  @Input() showRate:number=0;
  @Output() newRateEvent = new EventEmitter<number>();

  setValoracion=0;

  emitValoracion(newVal:number){

    this.newRateEvent.emit(newVal);
  }
}
