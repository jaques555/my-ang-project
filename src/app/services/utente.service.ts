import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  invioDati(utente: Utente): Observable<any> {

   let headers = { 'Content-Type': 'application/json' };
   return this.http.post('http://localhost:3000/unsecured/user', utente,  {headers:headers});
  }


  getUtenti(): Observable<Array<Utente>> {

    return this.http.get<Array<Utente>>('http://localhost:3000/unsecured/users');
  }

  eliminaUtente(id:string): Observable<any> {

    return this.http.delete('http://localhost:3000/unsecured/user/'+id);
  }

  ricercaUtente(nome:string, cognome:string): Observable<Array<Utente>> {

    if(nome !== "" && cognome !== "")
         
         return this.http.get<Array<Utente>>('http://localhost:3000/unsecured/users/search/?nome='+nome+'&cognome='+cognome);
        
    else if(nome !== "" && cognome === "")

         return this.http.get<Array<Utente>>('http://localhost:3000/unsecured/users/search/?nome='+nome);


    else if(nome === "" && cognome !== "") 

        return this.http.get<Array<Utente>>('http://localhost:3000/unsecured/users/search/?cognome='+cognome);

    else

      return this.http.get<Array<Utente>>('http://localhost:3000/unsecured/users');



  }
}
