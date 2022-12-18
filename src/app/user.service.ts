import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, first, map, Observable, tap } from 'rxjs';
import { user, userLogin, userRegister } from 'src/utils/schemas/user.schema';
import { baseUrl } from 'src/utils/constants';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private user$ = new BehaviorSubject<any>({});
  loggedUser$ = this.user$.asObservable();
  registerUser(credentials: any){
    return this.http.post(baseUrl+'/auth/register', credentials);
  }


  loginUser(credentials: any): Observable<any>{
    this.user$.next(this.http.post(baseUrl + '/auth/login', credentials));
    console.log(this.http.post(baseUrl + '/auth/login', credentials));
    return this.http.post(baseUrl + '/auth/login', credentials);
  }
}
