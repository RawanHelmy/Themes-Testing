import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{
    private LoggedIn = false;

    logIn() {
        this.LoggedIn = true;
    }
    LogOut() {
        this.LoggedIn = false;
    }
    getStatus() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> {
                return resolve(this.LoggedIn);
            }, 800)
        })
        return promise;
    }
}