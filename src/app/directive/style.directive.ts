import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnChanges {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) {
  }

  @Input()
  set appStyle(appStyle) {
    this.change(appStyle);
  }

  change(appStyle) {
    Object.keys(appStyle)
      .forEach((key) => {
        this.renderer.setStyle(this.elRef.nativeElement, key, appStyle[key]);
      });
  }
}


