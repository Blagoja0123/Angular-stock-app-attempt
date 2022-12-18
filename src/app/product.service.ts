import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/utils/constants';
import { Product } from 'src/utils/schemas/product.schema';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient) { }

  getProductList():Observable<any[]>{
    return this.http.get<any>(baseUrl+"/product/all");
  }

  getProductById(id: number):Observable<any>{
    return this.http.get<any>(baseUrl+`/product/${id}`);
  }

  addProduct(data: Product){
    return this.http.post(baseUrl+"/product/add", data);
  }

  updateProduct(id: number, data: any){
    return this.http.put(baseUrl+`/product/update/${id}`, data);
  }

  deleteProduct(id: number){
    return this.http.delete(baseUrl+`/product/delete/{id}`);
  }
}
