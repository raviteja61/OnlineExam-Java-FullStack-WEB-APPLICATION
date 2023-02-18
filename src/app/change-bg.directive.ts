import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {                // to manipulate the dom element's style 

  @Input()
  isCorrect : Boolean = false

  constructor(private el : ElementRef, private render : Renderer2) {}          // renderer -> to style the dom element

  @HostListener('click') 
  answer() {
    if(this.isCorrect) {
      this.render.setStyle(this.el.nativeElement, 'background', 'green')
      this.render.setStyle(this.el.nativeElement, 'color', '#fff')
      this.render.setStyle(this.el.nativeElement, 'border', '2px solid grey')
    } else {
      this.render.setStyle(this.el.nativeElement, 'background', 'red')
      this.render.setStyle(this.el.nativeElement, 'color', '#fff')
      this.render.setStyle(this.el.nativeElement, 'border', '2px solid grey')
    }
  }
}
