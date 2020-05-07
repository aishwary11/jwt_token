import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'http://localhost:3000/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private router: Router, private http: HttpClient) { }

  signUp(user): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  signIn(user) {
    return this.http.post<any>(`${this.baseUrl}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
      })
  }

  getToken() {
    return localStorage.getItem('access_token')
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token')
    return (authToken !== null) ? true : false
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token')
    if (removeToken == null) {
      this.router.navigate(['/login'])
    }
  }

  handleError(error: HttpErrorResponse) {
    let msg = ''
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(msg)
  }
}
