import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordNotMatched :boolean=false;
  userNotMatched :boolean=false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {


    var userDetails = JSON.parse(localStorage.getItem('userDetails'))
    var x = userDetails.find(userDetail => {
      return userDetail.username === this.loginForm.value.username;
    })
    if(typeof(x) != "undefined"){
      if (x.username === this.loginForm.value.username || x.name === this.loginForm.value.username ||
        x.email === this.loginForm.value.username){
          if(x.password === this.loginForm.value.password){
           this.router.navigateByUrl("/user");
         }
          else{
             this.passwordNotMatched =true;
          }
        }
    }
    else{
    this.userNotMatched =true;
    }
  }

}
