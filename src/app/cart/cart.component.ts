import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { ProductsService } from '../services/products.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
counter:number = 0 
counterValProd:number = 1
productsIDs:any=[]
products:any=[]
constructor(private http:HttpClient , private counterservice : CounterService , private requestsservice:RequestsService , private productService:ProductsService) {}


ngOnInit() {
  this.counterservice.counterVal.subscribe(res=>this.counter = res)
  this.counterservice.counterValProd.subscribe(res=>this.counterValProd = res)
  this.requestsservice._requests.subscribe(res=>this.productsIDs=res)

    // for (let i = 0; i < this.productsIDs.length; i++) {
    //   this.productService.getProductDetails(this.productsIDs[i]).subscribe((res:any)=> this.products.push(res))
     
    // }
      
  this.productsIDs.forEach((elem:number) =>  {
    this.productService.getProductDetails(elem).subscribe((res:any)=> this.products.push(res))
  });

}

removeProduct(id:any){
  this.products = this.products.filter(
    (elem:any) => elem.id !== id);
  this.productsIDs = this.productsIDs.filter(
    (elem:any) => elem !== id);
    this.requestsservice.getReq(this.productsIDs)
    console.log(this.productsIDs);
    this.counterservice.setCounter(--this.counter)
}


addmore(){
  this.counterservice.setCounterProd(++this.counterValProd)
}  







}
