import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl=false;
  
  constructor(private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]]  
       });
  
    }
    get f() { return this.loginForm.controls; }
  
   onSubmit(){
      this.submitted= true;
    //   this.router.navigate(['/register']);
      if(this.loginForm.invalid){
       return;
      }
     
    }
  }
  