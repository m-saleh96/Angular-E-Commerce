import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm : FormGroup;

  constructor(){
    this.registerForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      username : new FormControl (null , [Validators.required, Validators.pattern(/^\S+$/)]),
      password : new FormControl(null, [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;\"',.<>?/\\])(?!.*\s).{8,}$/)]),
      confirmPassword : new FormControl(null, Validators.required)
    })
  }


  submitRegisterForm(){
    console.log(this.registerForm);
    
  }


    

}
