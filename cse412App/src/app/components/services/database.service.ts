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

  getPlayers0(): Observable<Player[]> {
    console.log('${baseUrl}/${"players0"}')
    return this.http.get<Player[]>(`${baseUrl}/${"players0"}`);
  }

  getPlayers1(name: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/${"players1"}/${name}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  
}