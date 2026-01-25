import {
    Directive,
    effect,
    inject,
    input,
    signal,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {CarouselContext} from './carousel-context';

@Directive({
    selector: '[appCarousel]',
})
export class Carousel<Item> {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<CarouselContext<Item>>>(TemplateRef);

    public readonly appCarouselOf = input.required<Item[] | undefined | null>();
    private currentIndex = signal(0);
    constructor() {
        effect(() => {
            this.viewContainerRef.clear();

            const items = this.appCarouselOf() ?? [];
            const index = this.currentIndex();
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: items[index],
                index,
                back: () => this.back(),
                next: () => this.next(),
                appCarousel: items,
            });
        });
    }

    back() {
        const items = this.appCarouselOf() ?? [];
        this.currentIndex.set((this.currentIndex() - 1 + items.length) % items.length);
    }

    next() {
        const items = this.appCarouselOf() ?? [];
        this.currentIndex.set((this.currentIndex() + 1) % items.length);
    }
}
