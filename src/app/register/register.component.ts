import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.registerFormBuilder()
  }
  registerFormBuilder() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onRegister(form) {
    form = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    console.log(form)
    this.authService.signUp(form).subscribe(res => {
      if (res.result) {
        this.router.navigate(['/dashboard'])
      }
    })
  }

  reset() {
    this.registerForm.reset()
  }
}
