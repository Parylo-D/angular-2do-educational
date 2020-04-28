import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef) {

  }
  @HostListener('mouseenter') onMuseEnter() {

    this.highlight(this.highlightColor || "red")
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textShadow = null;


  }
  private highlight(color: string) {
    this.el.nativeElement.style.textShadow = `3px 3px 5px ${color}`;

  }

}