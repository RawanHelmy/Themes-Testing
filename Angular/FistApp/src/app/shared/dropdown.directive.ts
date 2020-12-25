import { Directive, ElementRef, HostListener, Renderer2 , HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // isOpen = false
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  // @HostListener('click') mouseClick(evenData: Event) {
  //   if (!this.isOpen) { this.renderer.addClass(this.elementRef.nativeElement, 'open') }
  //   else {
  //     this.renderer.removeClass(this.elementRef.nativeElement, 'open')
  //   }
  //   this.isOpen = !this.isOpen
  // }
  // @HostListener('document:click', ['$event']) closeDropDown(){
  //   this.renderer.removeClass(this.elementRef.nativeElement, 'open')
  //   this.isOpen = !this.isOpen
  // }
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
