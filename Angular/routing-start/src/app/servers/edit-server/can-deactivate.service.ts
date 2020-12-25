import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
    

export interface CanDeactivateGruadService { 
    canDeactivate: ()=> Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateGruadService> {
    canDeactivate(
        component: CanDeactivateGruadService,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
