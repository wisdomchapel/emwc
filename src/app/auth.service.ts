import { resolve, reject } from "q";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

export class AuthService{
  loggedIn = false;
  msgs: Message[] = [];

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
       setTimeout(()=>{
         resolve(this.loggedIn);
       }, 800);
      }
    );
    return promise;
  }
  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

}
