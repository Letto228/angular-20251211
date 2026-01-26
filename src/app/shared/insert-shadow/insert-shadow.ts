import {Directive, ElementRef, inject, signal} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
    host: {
        '[style.boxShadow]': 'shadow()',
        '(click)': 'onClick()',
    },
})
export class InsertShadow {
    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

    // protected readonly shadow = signal('inset 0 0 10px #000');
    protected readonly shadow = signal('');

    constructor() {
        console.log(this.elementRef.nativeElement);
    }

    protected onClick() {
        this.shadow.update(currentShadow => (currentShadow ? '' : 'inset 0 0 10px #000'));
    }
}
