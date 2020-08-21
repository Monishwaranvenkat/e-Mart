import { Token } from './model/TokenModel';
import { Injectable } from '@angular/core';
import {Observable, throwError, BehaviorSubject} from 'rxjs';
import {catchError,retry, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {

  private currentUserSubject: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;
  public url="http://localhost:9002";

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
   }


    public get currentUserValue(): Token {
        return this.currentUserSubject.value;
    }

  login(data):Observable<any>
    {
          return  this.http.post<any>("http://localhost:9002/authenticate",data).pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.jwt) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));;
    }

     logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


    register(data):Observable <any>
    {
     // alert(JSON.stringify(data) );
      console.log(JSON.stringify(data));
         return  this.http.post("http://localhost:9002/addemployee",data,httpOptions);
    }


}
