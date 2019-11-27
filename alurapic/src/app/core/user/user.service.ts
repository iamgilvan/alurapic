import { Injectable } from '@angular/core';
import { TokenService } from '../Token/Token.service';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
    
    constructor(private tokenService: TokenService) {
      
      this.tokenService.hasToken() &&
        this.decodeAndNotify();
     }

    setToken(token: string) {
      this.tokenService.setToken(token);
      this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
      const token = this.tokenService.getToken();
      const user = jwt_decode(token) as User; //<- (aqui a chamada jwt_decode)
      this.userSubject.next(user);
  }
}
