import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
    //el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appHighlight') highlightColor: string;

  @Input() defaultColor: string;

  @Input() java: string;

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor || this.defaultColor ||  'red');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
