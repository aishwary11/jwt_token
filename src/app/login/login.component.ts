import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginFormBuilder()
  }


  loginFormBuilder() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onLogin(form) {
    form = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log(form)
    this.authService.signIn(form)
    this.router.navigate(['/dashboard'])
  }

  reset() {
    this.loginForm.reset()
  }

  signup() {
    this.router.navigate(['/register'])
  }
}
