import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerCustomComponent } from "./loading-custom-spinner/loading-custom-spinner.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations: [
        LoadingSpinnerCustomComponent,
        AlertComponent,
        PlaceHolderDirective,
        DropdownDirective,
    ],
    imports: [CommonModule],
    exports: [
        LoadingSpinnerCustomComponent,
        AlertComponent,
        PlaceHolderDirective,
        DropdownDirective,
        CommonModule
    ]
})
export class SharedModule{

}