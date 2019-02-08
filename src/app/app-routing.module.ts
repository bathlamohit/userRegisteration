import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { AuthGuard  } from ".././app/auth.guard";


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: LoginComponent },
  { path: 'user', component: UserDetailsComponent ,canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
