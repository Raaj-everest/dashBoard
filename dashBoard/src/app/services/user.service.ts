import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers(id:number):Observable<User>{
    let param = ""+id;
return this.http.get<User>('https://reqres.in/api/users/'+param).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
console.error(error);
console.error(error.message)
return throwError(error.message);
  }
}
