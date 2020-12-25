import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";


import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild( [{path: 'auth', component: AuthComponent }])
    ],
    exports:[RouterModule]
})
export class AuthModule{ }