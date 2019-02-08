import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from "../custom/PasswordValidation";
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  user = {};
  userDetails = [];
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, Validators.required],
      number: [null, [Validators.required, Validators.minLength(10)]],
      address: [null, [Validators.required, Validators.maxLength(30)]],

    },
      {
        validator: PasswordValidation.MatchPassword 
      }
    );
  }

  createUser() {
    const userDetails = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : [];
    userDetails.push(this.registerForm.value);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    this.router.navigateByUrl("/");
  }
}
