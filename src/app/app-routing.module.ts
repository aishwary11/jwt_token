import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthGuard } from './auth.guard'
import { DashboardComponent } from './dashboard/dashboard.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  }, {
    path: "login",
    component: LoginComponent,
    // canActivate: [AuthGuard]
  }, {
    path: "register",
    component: RegisterComponent
  }, {
    path: "dashboard",
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
