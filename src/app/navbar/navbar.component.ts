import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  counter:number = 0;
  constructor(private counterservice : CounterService){}
  ngOnInit(){
    this.counterservice.counterVal.subscribe(res=>this.counter = res)
  }
  // counter:number = 0;
}
