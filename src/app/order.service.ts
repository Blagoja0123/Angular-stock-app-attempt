import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly baseUrl = "https://localhost:7038/api";
  constructor(private http:HttpClient) { }

  
}
