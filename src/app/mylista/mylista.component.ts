import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Utente } from '../models/utente';
import { UtenteService } from '../services/utente.service';

@Component({
  selector: 'app-mylista',
  templateUrl: './mylista.component.html',
  styleUrls: ['./mylista.component.css']
})
export class MylistaComponent implements OnInit {

  utenti: Utente[] = [];



  constructor(private utenteService:UtenteService) { }

  ngOnInit() {

    this.utenteService.getUtenti().subscribe(resp=>{

      this.utenti = resp;
    });


  }


  eliminaUtente(event) {

     this.utenteService.eliminaUtente(event).subscribe(resp=>{

          this.ngOnInit();
     });
  }

  ricercaUtente(myform) {

    const nome = myform.form.controls.nome.value;
    const cognome = myform.form.controls.cognome.value;

    this.utenteService.ricercaUtente(nome, cognome).subscribe(resp=>{

      this.utenti = resp;

    });
  }

}
