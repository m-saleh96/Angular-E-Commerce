import { Component , Input} from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!:Product

constructor(private router:Router){}


redirectToProduct(id:number){
    this.router.navigate(['product-detail' , id])
}


}
