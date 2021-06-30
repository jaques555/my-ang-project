import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utente } from '../models/utente';

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {

  @Input()
  utentiChild: Utente[] = [];

  @Output()
  sendEliminaUtente = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  eliminaUtente(utente:Utente) {

     this.sendEliminaUtente.emit(utente._id);
  }

}
