import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  //PLAYER QUERIES
  getPlayers0(): Observable<Player[]> {
    console.log('${baseUrl}/${"players0"}')
    return this.http.get<Player[]>(`${baseUrl}/${"players0"}`);
  }

  getPlayers1(name: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/${"players1"}/${name}`);
  }

  getPlayers2(collegename: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/${"players2"}/${collegename}`);
  }

  getPlayers3(seasonyear: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/${"players3"}/${seasonyear}`);
  }

  getPlayers12(name: any, collegename: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/${"players12"}/${collegename}/${name}`);
  }

  getPlayers13(name: any, seasonyear: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/${"players13"}/${seasonyear}/${name}`);
  }

  getPlayers23(collegename: any, seasonyear: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/${"players23"}/${seasonyear}/${collegename}`);
  }
  
  getPlayers123(name: any, collegename: any, seasonyear: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/${"players123"}/${collegename}/${seasonyear}/${name}`);
  }

  //TEAM QUERIES
  
}