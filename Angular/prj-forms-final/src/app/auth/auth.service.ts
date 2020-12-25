import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject , throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";
import { environment } from '../../environments/environment'

export interface ResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?:boolean
}
@Injectable()
export class AuthService {
    user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    timer: any = null;
    constructor(private http: HttpClient , private Router : Router) {
    }
    signUp(email: string, password: string) {
        const user = { email: email, password: password, returnSecureToken: true };
        return this.http.post<ResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.FireBaseKey,
            user
        ).pipe(catchError(this.HandleError), tap(data => {
            const user = new User(data.email, data.localId, data.idToken,
                new Date(new Date().getTime() + +data.expiresIn * 1000));
            this.user.next(user);
            localStorage.setItem('UserData', JSON.stringify(user));
            this.AutoLogOut(+data.expiresIn * 1000)
        }))
    }
    login(email: string, password: string) {
        const user = { email: email, password: password, returnSecureToken: true };
        return this.http.post<ResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.FireBaseKey,
            user
        ).pipe(catchError(this.HandleError), tap(data => {
            const user = new User(data.email, data.localId, data.idToken,
                new Date(new Date().getTime() + +data.expiresIn * 1000));
            this.user.next(user)
            localStorage.setItem('UserData', JSON.stringify(user));
            this.AutoLogOut(+data.expiresIn * 1000)
        }))
    }
    private HandleError(HttpError: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred';
        if (!HttpError.error || !HttpError.error.error)
            return throwError(errorMessage)
        switch (HttpError.error.error.message) {
            case 'EMAIL_EXISTS':
                return throwError('This email already exists')
            case 'EMAIL_NOT_FOUND':
                return throwError('This email does not exists')
            case 'INVALID_PASSWORD':
                return throwError('This password was invalid')
            default:
                return throwError(errorMessage)
        }
    }
    logOut() {
        this.user.next(null);
        this.Router.navigate(['/auth'])
        localStorage.clear();
        if (this.timer){
            clearTimeout(this.timer);
        }
        this.timer = null;
    }
    AutoLogOut(time : number) {
       this.timer =  setTimeout(() => {
            this.logOut()
        }, time)
    }
    AutoLogIn() {
        const user: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('UserData'));
        if (!user)
            return;
        const loadedUser = new User(user.email, user.id, user._token, new Date(user._tokenExpirationDate))
        if (loadedUser.token){
            this.user.next(loadedUser);
        }
        const timer = new Date(user._tokenExpirationDate).getTime() - new Date().getTime();
        this.AutoLogOut(timer)
    }
}