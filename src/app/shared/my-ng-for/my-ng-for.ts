import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {MyNgForContext} from './my-ng-for-context';

@Directive({
    selector: '[appMyNgFor]',
})
export class MyNgFor<Item> {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<MyNgForContext<Item>>>(TemplateRef);

    readonly appMyNgForOf = input.required<Item[] | undefined | null>();

    constructor() {
        this.createViewsByArray();
    }

    private createViewsByArray() {
        effect(() => {
            this.viewContainerRef.clear();

            this.appMyNgForOf()?.forEach((item, index) => {
                this.viewContainerRef.createEmbeddedView(this.templateRef, {
                    $implicit: item,
                    array: this.appMyNgForOf(),
                    appMyNgForOf: this.appMyNgForOf(),
                    index,
                });
            });
        });
    }
}
