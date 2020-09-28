import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appPink]'
})
export class PinkDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#ffc0cb'
  }

}
