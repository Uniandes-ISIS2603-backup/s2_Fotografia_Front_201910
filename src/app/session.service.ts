import { Injectable } from '@angular/core';
import { User } from './auth/user';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  
  private session;
  
  setSession(value): void{
      this.session = value;
  }
  
  getSession(){
      return this.session; 
  }
  
  
}
