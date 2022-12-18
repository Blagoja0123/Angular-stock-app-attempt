import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {

  constructor(private service: ProductService,
    private route: ActivatedRoute,
    private location: Location) { 
    
  }

  product$: any;

  ngOnInit(): void { 
    this.getProduct();   
  }

  getProduct(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.service.getProductById(id).subscribe(product => this.product$ = product);
    console.log(this.product$);
  }
}
