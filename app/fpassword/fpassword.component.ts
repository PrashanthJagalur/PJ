import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent implements OnInit {
  forgotpswForm : FormGroup;
  submitted = false;
  loading = false;

  constructor( private formBuilder: FormBuilder,
    private router : Router,
  ) { }

  ngOnInit() {
    this.forgotpswForm = this.formBuilder.group({
      email:["", Validators.required],
    })
  }
onSubmit(){
 this.submitted = true;
 
 if(this.forgotpswForm.invalid){
   return;
 }
}
}