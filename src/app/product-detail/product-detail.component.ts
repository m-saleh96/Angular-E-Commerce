import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id:any;
  product !: Product 

  constructor(private route:ActivatedRoute , private http:HttpClient){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = (params['id'])
    });
    this.http.get('../../assets/products-list.json').subscribe(data => {
      this.product = JSON.parse(JSON.stringify(data)).find((product:Product) => product.id == this.id)
  })
  }
}
