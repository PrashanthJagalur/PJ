import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, AlertService, AuthenticationService } from '../_services';
import { first } from '../../../node_modules/rxjs/operators';
import { mixinErrorState } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
registerForm : FormGroup;
loading=false;
submitted=false;
returnUrl=false;

constructor(private formBuilder: FormBuilder,
  private router: Router,
  private userservice: UserService,
  private alertservice: AlertService,
  private authenticationservice: AuthenticationService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ["", Validators.required],
      /*lastname:["", Validators.required],
      username:["", Validators.required],*/
      password: ["", [Validators.required,Validators.minLength(6)]],
      email : ["", Validators.required],
      phoneno : ["", [Validators.required, Validators.minLength(10)]],
      /*address:["", Validators.required], */     
    })
  }

get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted= true;
   // this.router.navigate(['/login']);
  if(this.registerForm.invalid){
      return;
  }
  this.loading = true;
    this.userservice.register(this.registerForm.value)
        .pipe(first())
         .subscribe(
            data => {
                this.alertservice.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertservice.error(error);
                this.loading = false;
            });
  }
}
