import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceHolderDirective } from "../shared/placeholder/placeholder.directive";
import { AuthService, ResponseData } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnInit , OnDestroy{
    isLogedin = false;
    isLoading = false;
    logForm: FormGroup;
    errorMessage: string = null;
    @ViewChild(PlaceHolderDirective, { static: false }) error: PlaceHolderDirective;
    private sub : Subscription
    constructor(private AuthService: AuthService, private Router: Router, private ComponentFactory: ComponentFactoryResolver) { }
    ngOnDestroy() {
        if (this.sub){
            this.sub.unsubscribe();
        }
    }
    ngOnInit() {
        this.logForm = new FormGroup({
            'email': new FormControl(null, [Validators.required , Validators.email]),
            'password': new FormControl(null , [Validators.required , Validators.minLength(6)])
        })
    }
    switchLoginMode() {
        this.isLogedin = !this.isLogedin
    }
    onClose() {
        this.errorMessage = null
    }
    onSubmit() {
        if (this.logForm.invalid)
            return;
        this.isLoading = true;
        const email = this.logForm.value['email'];
        const password = this.logForm.value['password'];
        const service: Observable<ResponseData> =
            this.isLogedin ? this.AuthService.login(email, password)
                : this.AuthService.signUp(email, password);
        service.subscribe((res) => {
                console.log(res)
            this.isLoading = false
            this.Router.navigate(['./recipes'])
            }, errorMessage => {
                    console.log(errorMessage)
                    this.errorMessage = errorMessage;
                this.isLoading = false
                this.showErrorAlert(errorMessage)
            });
        this.logForm.reset();
        this.errorMessage = null;
    }
    private showErrorAlert(message : string) {
        const AlertComponentResolver = this.ComponentFactory.resolveComponentFactory(AlertComponent);
        this.error.viewContainer.clear();
        const comp = this.error.viewContainer.createComponent(AlertComponentResolver);
        comp.instance.message = message;
        this.sub =comp.instance.close.subscribe(() => {
            this.sub.unsubscribe();
            this.error.viewContainer.clear();
        })
    }
}