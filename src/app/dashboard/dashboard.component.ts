import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup
  constructor(private router: Router, private fb: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.doLogout()
  }
}
