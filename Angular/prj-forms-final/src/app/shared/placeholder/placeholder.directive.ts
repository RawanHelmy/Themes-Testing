import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[app-placeholder]'
})
export class PlaceHolderDirective{
    constructor( public viewContainer: ViewContainerRef) {
        
    }
}