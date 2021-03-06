import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  host="http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  getVilles(){
    return this.httpClient.get(this.host+"/villes");
  }
  getCinemas(v){
    return this.httpClient.get(v._links.cinemas.href);
  }
  getSalles(c){
    return this.httpClient.get(c._links.salles.href);
  }
  getProjections(salle){
    let url= salle._links.projections.href.replace("{?projection}","");
    return this.httpClient.get(url+"?projection=p1");
  }
  getTicketsPlaces(p){
    let url= p._links.tickets.href.replace("{?projection}", "");
    return this.httpClient.get(url+"?projection=ticketProj")
  }
  payerTickets(dataForm){
    return this.httpClient.post(this.host+"/payerTickets", dataForm);
  }


}
