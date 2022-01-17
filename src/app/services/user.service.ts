import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user'
import { catchError, Observable, throwError } from 'rxjs';
import { awsUrl } from 'src/environments/environment';

const url: string = `${awsUrl}/users`;

// this service will be injected into components hence injectable
// all services are singleton objects
// here we inject an http client
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    public logger: LoggerService) {  }
  // creating headders for a post request
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json' })
  }
  //GET REQUEST
  // returning an observable similar to promises, provides a string of data over time
  public findAllUsers(): Observable<User[]> {
    // send GET request
    // return or handle error
    return this.http.get<User[]>(url)  //this will reach the rest controller of the spring api
      .pipe(catchError(this.handleError)) // like .them, we can call a method on data returned
    }
  //POST REQUEST
  registerUser(user: User): Observable<User> {
    // takes three args: the url, the object to post, the options
    return this.http.post<User>(`${url}/add`, user, this.httpOptions)
      .pipe(catchError(this.handleError))
  }



  private handleError(httpError: HttpErrorResponse) {
    if(httpError.error instanceof ErrorEvent) {
      console.log('An error occured: ', httpError.error.message)
    } else {
      console.error(`
      Backend returned code ${httpError.status},
      body was: ${httpError.error}
      `)
    }
    //this is an observable we can return in place of the user we would have had from RxJS
    return throwError(() => new Error('something really bad happened--try again later'))
  }
}
