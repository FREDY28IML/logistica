import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  urlApi : string = 'http://localhost:_3000'

  constructor(private http:HttpClient) { }

  login(){
    let url = `${this.urlApi}/user/login`;
    
  }


}
