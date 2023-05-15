import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import productss from '../../assets/products-list.json'




@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  // products: Product[] =[]
  products: Product[] =[]

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.products = productss
    console.log(this.products);
    
  //   this.http.get('../../assets/products-list.json').subscribe(data => {
  //     this.products = JSON.parse(JSON.stringify(data));
  //     console.log(data)
  // });
  }
 
  }