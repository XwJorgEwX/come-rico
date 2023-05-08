import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  show:boolean=false;

  showModal(){
    this.show = true;
  }

  hideModal(){
    this.show = false;
  }

  ngOnInit() {
    //this.show = true;
  }

  ngOnDestroy() {
    this.show = false;
  }
}
