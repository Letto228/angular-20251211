import {Directive, signal} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
    host: {
        '[style.boxShadow]': 'shadow()',
        '(click)': 'onClick()',
    },
})
export class InsertShadow {
    protected readonly shadow = signal('');

    protected onClick() {
        this.shadow.update(currentShadow => (currentShadow ? '' : 'inset 0 0 10px #000'));
    }
}
