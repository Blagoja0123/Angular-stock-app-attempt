import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  productList$!:Observable<any[]>;
  

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.productList$ = this.service.getProductList();
  }

}
