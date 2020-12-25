import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input('appBetterHighlight') defaultColor: string;
  @Input() OverColor: string ;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef : ElementRef,private renderer: Renderer2) { }
  ngOnInit() {
    this.backgroundColor =this.defaultColor
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseover(eventData : Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.OverColor;
  }
  @HostListener('mouseleave') mouseLeave(eventData : Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = this.defaultColor;
  }
}
