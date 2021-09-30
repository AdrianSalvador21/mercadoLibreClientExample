import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyImg]',
})
export class LazyImgDirective {
  /*
  * Directive natively includes the lazy attribute loading to images if support it
  */
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
