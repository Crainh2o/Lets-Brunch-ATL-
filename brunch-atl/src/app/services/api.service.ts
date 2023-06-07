import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAllPlaces() {return this.http.get("http://localhost:8080/api/brunchPlaces/")}
  
}
